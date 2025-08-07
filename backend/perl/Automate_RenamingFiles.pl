use strict;
use warnings;

my $folder = "legal_docs";
opendir(my $dir, $folder) or die "Cannot open directory: $!";
my @files = readdir($dir);
closedir($dir);

foreach my $file (@files) {
    next if ($file =~ /^\./);  # Skip hidden files and . or ..

    my $full_path = "$folder/$file";
    my ($case_id, $client_name);

    # Try extracting from filename
    
    if ($file =~ /case[_]?(\d+).*client[_]?([A-Za-z\.\'\ _]+)/i) {
        ($case_id, $client_name) = ($1, $2);
        $client_name =~ s/_/ /g;  # Replace underscores with spaces
    } elsif ($file =~ /client[_]?([A-Za-z\.\'\ _]+).*case[_]?(\d+)/i) {
        ($client_name, $case_id) = ($1, $2); 
        $client_name =~ s/_/ /g;  # Replace underscores with spaces

    }
 else {
        # Try extracting from file content
        open(my $fh, '<', $full_path) or next;
        while (my $line = <$fh>) {
            if ($line =~ /Case ID:\s*(\d+)/i) {
                $case_id = $1;
            }
            if ($line =~ /Client Name:\s*([A-Za-z\s]+)/i) {
                $client_name = $1;
                $client_name =~ s/\\s+//g;  # Remove spaces
            }
        }
        close($fh);
    }

    # Rename if both values found
    if ($case_id && $client_name) {
        my ($name, $ext) = $file =~ /(.+)\\.(\\w+)$/;
        my $new_name = "Case_${case_id}_${client_name}.$ext";
        rename($full_path, "$folder/$new_name") or warn "Could not rename $file\n";
        print "Renamed $file to $new_name\n";
    } else {
        print "Skipped $file: missing info\n";
    }
}
