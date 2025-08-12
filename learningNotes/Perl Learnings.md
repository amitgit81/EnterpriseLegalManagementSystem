---



\## 🧾 Full Script Recap



```perl

\\#!/usr/bin/perl

use strict;

use warnings;



my $input\\\_file  = 'sample.log';

my $output\\\_file = 'errors\\\_only.log';



open(my $in, '<', $input\\\_file) or die "Cannot open $input\\\_file: $!";

open(my $out, '>', $output\\\_file) or die "Cannot open $output\\\_file: $!";



while (my $line = <$in>) {

	   if ($line =~ /ERROR/) {

	       print $out $line;

	  }

}



close($in);

close($out);



print "Error lines extracted to $output\\\_file\\\\n";

```



---



\## 🧠 Line-by-Line Explanation



\### 1. `#!/usr/bin/perl`

\- This is called a \*\*shebang line\*\*.

\- It tells the system to use Perl to run this script.

\- Required only on Unix/Linux/macOS systems if you run the script directly (`./script.pl`).



---



\### 2. `use strict;`

\- Forces you to write \*\*safe and clean code\*\*.

\- Prevents you from using undeclared variables.

\- Helps catch bugs early.



---



\### 3. `use warnings;`

\- Shows \*\*warnings\*\* if something might go wrong.

\- Example: If you use a variable that was never initialized.



---



\### 4. `my $input\\\_file  = 'sample.log';`

\- Declares a \*\*scalar variable\*\* (`$input\\\_file`) and assigns it the name of the input file.

\- `my` is used to declare variables \*\*locally\*\* (good practice).



---



\### 5. `my $output\\\_file = 'errors\\\_only.log';`

\- Same as above, but for the output file where error lines will be saved.



---



\### 6. `open(my $in, '<', $input\\\_file) or die "Cannot open $input\\\_file: $!";`

\- Opens the input file for \*\*reading\*\* (`'<'`).

\- `$in` is a \*\*filehandle\*\* — like a pointer to the file.

\- `or die` means: if the file can’t be opened, \*\*stop the program\*\* and show an error.

\- `$!` gives the \*\*system error message\*\* (e.g., "No such file").



---



\### 7. `open(my $out, '>', $output\\\_file) or die "Cannot open $output\\\_file: $!";`

\- Opens the output file for \*\*writing\*\* (`'>'`).

\- If the file doesn’t exist, Perl will \*\*create it\*\*.

\- If it exists, Perl will \*\*overwrite it\*\*.



---



\### 8. `while (my $line = <$in>) {`

\- Reads the input file \*\*line by line\*\*.

\- `<$in>` reads one line from the file.

\- `$line` stores the current line.



---



\### 9. `if ($line =~ /ERROR/) {`

\- Checks if the line \*\*contains the word "ERROR"\*\*.

\- `=~` is the \*\*regex match operator\*\*.

\- `/ERROR/` is a \*\*regular expression\*\* that matches the word "ERROR".



---



\### 10. `print $out $line;`

\- If the line contains "ERROR", write it to the \*\*output file\*\*.



---



\### 11. `}` — End of the `while` loop block.



---



\### 12. `close($in);`

\- Closes the input file. Always good practice.



---



\### 13. `close($out);`

\- Closes the output file.



---



\### 14. `print "Error lines extracted to $output\\\_file\\\\n";`

\- Prints a message to the terminal so the user knows the task is done.



---



\## 🧠 Key Concepts You Learned



| Concept 		| Description 				|

|-----------------------|---------------------------------------|

| `my` 			| Declares a local variable 		|

| `open` 		| Opens a file for reading or writing 	|

| `<$filehandle>` 	| Reads a line from a file 		|

| `=~ /pattern/` 	| Checks if a string matches a regex 	|

| `print` 		| Outputs text to screen or file 	|

| `die` 		| Stops the program with an error message |

| `$!` 			| System error message 			|



---



Would you like to try modifying this script now? For example:

\- Extract lines with both `ERROR` and `WARNING`

\- Count how many error lines were found

\- Accept the file name from the command line



=======================================================================

Perl Basics   **From GeeksForGeeks**

=======================================================================



\# Perl Program to illustrate the Operators

 

\# Operands

$a = 10;

$b = 4;

$c = true;

$d = false;

 

\# using arithmetic operators

print "Addition is: ", $a + $b, "\\n";

print "Subtraction is: ", $a - $b, "\\n" ;



\# using Relational Operators

if ($a == $b)

{

   print "Equal To Operator is True\\n";

}

else

{

   print "Equal To Operator is False\\n";

}



\# using Logical Operator 'AND'

$result = $a \&\& $b;

print "AND Operator: ", $result, "\\n";



\# using Bitwise AND Operator

$result = $a \& $b;

print "Bitwise AND: ", $result, "\\n";



\# using Assignment Operators

print "Addition Assignment Operator: ", $a += $b, "\\n";





---------------------------output------------------------



Addition is: 14

Subtraction is: 6

Equal To Operator is False

AND Operator: 4

Bitwise AND: 0

Addition Assignment Operator: 14



**Note - We use , (comma) to concatenate the string while printing.**

&nbsp;      \*\*we use $ with variable name to use or define a variable.\*\*










======================================================================

Datatypes

=====================================================================



Arrays, Scalars, Hashes, Strings





**Scalars** :- It is a single unit of data which can be an integer number, floating-point, a character, a string, a paragraph, or an entire web page.

Example:



\# Perl program to demonstrate

\# scalars variables



\# a string scalar

$name = "Alex";

 

\# Integer Scalar

$rollno = 13;

 

\# a floating point scalar

$percentage = 87.65;



\# In hexadecimal form

$hexadec = 0xcd;



\# Alphanumeric String

$alphanumeric = "gfg21";



\# special character in string scalar

$specialstring = "^gfg";



\# to display the result

print "Name = $name\\n";

print "Roll number = $rollno\\n";

print "Percentage = $percentage\\n";

print "Hexadecimal Form = $hexadec\\n";

print "String with alphanumeric values = $alphanumeric\\n";

print "String with special characters = $specialstring\\n";





----------------------output--------------------------------------



Name = Alex

Roll number = 13

Percentage = 87.65

Hexadecimal Form = 205

String with alphanumeric values = gfg21

String with special characters = ^gfg



==================================================================





**Arrays**

An array is a variable that stores the value of the same data type in the form of a list. To declare an array in Perl, we use ‘@’ sign in front of the variable name.

Ex-

@number = (40, 55, 63, 17, 22, 68, 89, 97, 89)



Rest all the operations and other things are same like other language's array. (only defining was different)



Ex -



\#!/usr/bin/perl



\# Perl Program for array creation

\# and accessing its elements



\# Define an array

@arr1 = (1, 2, 3, 4, 5);



\# using qw function

@arr2 = qw /This is a Perl Tutorial by GeeksforGeeks/;



\# Accessing array elements

print "Elements of arr1 are:\\n";

print "$arr1\[0]\\n";

print "$arr1\[3]\\n";



\# Accessing array elements

\# with negative index

**print "\\nElements of arr2 are:\\n";**

**print "$arr2\[-1]\\n";**

**print "$arr2\[-3]\\n";**



--------------------------output------------------------



Elements of arr1 are:

1

4



Elements of arr2 are:

GeeksforGeeks

Tutorial





======================================================================



**Iterating through an Array:**

======================================================================

\#!/usr/bin/perl



\# Perl program to illustrate

\# iteration through an array



\# array creation

@arr = (11, 22, 33, 44, 55);



\# Iterating through the range

print("Iterating through range:\\n");



\# size of array

$len = @arr;                                **// Here we are putting array (@arr) size (by giving name) in "len" variable**

 

for ($b = 0; $b < $len; $b = $b + 1)

{

    print "\\@arr\[$b] = $arr\[$b]\\n";

}



\# Iterating through loops

print("\\nIterating through loops:\\n");



\# foreach loop

foreach $a (@arr)                         **//For each loop syntax: foreach <variable\_name> (<arrayName>){.....}**

{

    print "$a ";

}





------------output---------------------------------



Iterating through range:

@arr\[0] = 11

@arr\[1] = 22

@arr\[2] = 33

@arr\[3] = 44

@arr\[4] = 55



Iterating through loops:

11 22 33 44 55





========================================================================

**Hash in Perl**

**=====================**

If non-string values are used as the keys, it gives an unexpected result.



The main advantage of using a hash over arrays is that hash allows the execution time of basic operations like, to get a value or to set a value at a particular key (index in case of arrays), to remain constant even for large data sets. Note that hashes in Perl are not ordered.



This means that when you iterate over a hash, you may not extract the values in the same order in which they were inserted. The values stored in a hash can of type integer, float, string, boolean, arrays and hash itself.





==============================================================

File Handling important points

==========================================================



print(): **Writes data** to a file.                     

&nbsp;    Ex - 	open(w, ">", "Hello.txt");		// getting writing handler or pointer or cursor as w to write

&nbsp;		print w "This content is being written in the file";    //here print w means writing the content and content which will be written is in double quotes . 



seek(): Moves the file pointer to a specific location in the file.  

&nbsp;   Ex - seek r, 0, 0;		//# Setting "r" read handler to the beginning of Hello.txt file



tell(): Returns the current position of the file pointer.

stat(): Returns information about a file, such as its size, owner, and permissions.



\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Examples** - 

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\#!/usr/bin/perl



\# Opening File Hello.txt in Read mode

open(r, "<", "Hello.txt");



\# Printing the existing content of the file

print("Existing Content of Hello.txt: " . <r>);



\# Opening File in Write mode

open(w, ">", "Hello.txt");



\# Set r to the beginning of Hello.txt

seek r, 0, 0;



print "\\nWriting to File...";



\# Writing to Hello.txt using print

print w "Content of this file is changed";



\# Closing the FileHandle

close(w);



\# Set r to the beginning of Hello.txt

seek r, 0, 0;



\# Print the current contents of Hello.txt

print("\\nUpdated Content of Hello.txt: ".<r>);



\# Close the FileHandle

close(r);



\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Example2** : Just for reading file line by line.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\#!/usr/bin/perl

use strict;

use warnings;



\# Opening the file in read-only mode

open(my $fh, "<", "Hello.txt") or die "Cannot open file: $!";



\# Reading the file line by line

while (my $line = <$fh>) {

&nbsp;   # You can process each line here

&nbsp;   print $line;  # Just printing for now

}



\# Closing the file

close($fh);



---------------------------------

Explanation of Example 2:  

--------------------------------



❌ print(<$line>) — Incorrect usage

This syntax is not valid Perl. Here's why:



<...> is used to read from a filehandle, not to wrap variables.

$line is already a scalar variable holding a string, so wrapping it in <...> doesn't make sense and will cause a syntax error.

✅ Correct usage in the loop:



Here’s what’s happening:



<$fh> reads a line from the filehandle $fh.

$line stores that line.

print $line; prints the line.







