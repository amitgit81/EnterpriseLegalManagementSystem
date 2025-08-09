#!/usr/bin/env perl
use Mojolicious::Lite;
use File::Basename;
use File::Path qw(make_path);
use POSIX qw(strftime);



# Create uploads directory if it doesn't exist
my $upload_dir = 'uploads';
make_path($upload_dir) unless -d $upload_dir;


get '/' => sub {
  my $c = shift;
  $c->reply->static('documentUploader.html');
};

# Route to handle POST request from form
post '/upload' => sub {
  my $c = shift;

  # Get form data
  my $client_name = $c->param('ClientName') || 'Unknown';
  my $case_id     = $c->param('CaseId')     || '0000';
  my $upload      = $c->req->upload('Document');

  # Check if file was uploaded
  unless ($upload) {
    return $c->render(text => "❌ No file uploaded.");
  }

  # Validate file extension
  my $filename = basename($upload->filename);
  my ($ext) = $filename =~ /\.([^.]+)$/;
  $ext = lc($ext || '');
  unless ($ext =~ /^(pdf|docx|doc)$/) {
    return $c->render(text => "❌ Invalid file type. Only PDF, DOCX, DOC allowed.");
  }

  # Save file with timestamp
  my $timestamp  = strftime "%Y%m%d-%H%M%S", localtime;
  my $saved_path = "$upload_dir/$timestamp-$filename";
  $upload->move_to($saved_path);

  # Log metadata
  open my $log, '>>', "$upload_dir/upload.log" or die "Can't open log file!";
  print $log "$timestamp | $client_name | $case_id | $filename\n";
  close $log;

  # Respond to user
  $c->render(text => "✅ File uploaded successfully: $filename");
};

app->start;
