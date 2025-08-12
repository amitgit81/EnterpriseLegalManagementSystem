HTML learnings -





<!Doctype html> :- Doctype sets the version of html, that the browser should use to display html that you wrote. Here version is not mentioned means - Its asking to use latest version of html.



==================================================================================

The HTML <pre> element defines preformatted text.



The text inside a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:



Summary of learnings-



===================================================================================

<p>	Defines a paragraph

<hr>	Defines a thematic change in the content. It draw a horizontal line

<br>	Inserts a single line break. It don't draw the line, it just break the line, and provide instruction to starts from the next new line.

<pre>	Defines pre-formatted text




<a>  	Ex = <a href="http://example.com/legal.html" target="\\\\\\\_blank"> Legal page </a>                \\\\\\\_blank = means it will load the link in new page.    \\\\\\\_self = means it will load the link on the same page by replacing page.



Relative link  =  page we are looking for are on same folder path

absolute link  =  page we are looking is not on same folder path, so we provide proper link (means - page is on server)

\\\&nbsp;		  It is used when, linking to pages, which are located on another site/server. (not available on your website)


====================================================================================

Use the \\\\\\\*\\\\\\\*style\\\\\\\*\\\\\\\* attribute for styling HTML elements

Use \\\\\\\*\\\\\\\*background-color\\\\\\\*\\\\\\\* for background color   Ex - "background-color:powderblue;" or any hex-code

Use \\\\\\\*\\\\\\\*color\\\\\\\*\\\\\\\* for text colors	    

Use \\\\\\\*\\\\\\\*font-family\\\\\\\*\\\\\\\* for text fonts      Ex - "font-family:courier;"

Use \\\\\\\*\\\\\\\*font-size\\\\\\\*\\\\\\\* for text sizes        Ex - "font-size:300%;"

Use \\\\\\\*\\\\\\\*text-align\\\\\\\*\\\\\\\* for text alignment   Ex - "text-align:center;"



======================================================================================

HTML Formatting Elements

Formatting elements were designed to display special types of text:



<b> - Bold text

<strong> - Important text

<i> - Italic text

<em> - Emphasized text     	A screen reader will pronounce the words in <em> with an emphasis, using verbal stress.  The HTML <mark> element defines text that should be marked or highlighted

<mark> - Marked text

<small> - Smaller text

<del> - Deleted text

<ins> - Inserted text		The HTML <ins> element defines a text that has been inserted into a document. Browsers will usually underline inserted text

<sub> - Subscript text		Subscript text appears half a character below the normal line

<sup> - Superscript text





=======================================================================================

<abbr>	Defines an abbreviation or acronym

<address>	Defines contact information for the author/owner of a document. usually renders in italic

<bdo>	Defines the text direction. Word ko ulta likhna.  Amit -> timA

<blockquote>	Defines a section that is quoted from another source. Browsers usually indent <blockquote> elements.

<cite>	Defines the title of a work

<q>	Defines a short inline quotation.  insert quotation marks around the statement.





======================================================================================

CSS can be used in 3 ways: -



\\\\\\\*\\\\\\\*Inline\\\\\\\*\\\\\\\* - by using the style attribute inside HTML elements

\\\\\\\*\\\\\\\*Internal\\\\\\\*\\\\\\\* - by using a <style> element in the <head> section

\\\\\\\*\\\\\\\*External\\\\\\\*\\\\\\\* - by using a <link> element to link to an external CSS file



###### \\\\\\\*Inline CSS\\\\\\\*

An inline CSS is used to apply a unique style to a single HTML element. For same kind of element tag, we can use different-different style and color. 

An inline CSS uses the style attribute of an HTML element.



###### \\\\\\\*Internal CSS\\\\\\\*

An internal CSS is used to define a style for a single HTML page. But, same css will apply for same element tag in a page.

it is defined in the <head> section of an HTML page, within a <style> element.



###### \\\\\\\*External CSS\\\\\\\*

An external style sheet is used to define the style for many HTML pages.

To use an external style sheet, add a link to it in the <head> section of each HTML page using <link> tag. (self closing or single tag)



<head>

 <link rel="stylesheet" href="NameWithPath\\\\\\\\\\\\\\\_of\\\\\\\\\\\\\\\_cssFile">

</head>





Use the HTML \\\\\\\*\\\\\\\*style\\\\\\\*\\\\\\\* attribute for inline styling

Use the HTML \\\\\\\*\\\\\\\*<style>\\\\\\\*\\\\\\\* element to define internal CSS

Use the HTML \\\\\\\*\\\\\\\*<link>\\\\\\\*\\\\\\\* element to refer to an external CSS file

Use the HTML \\\\\\\*\\\\\\\*<head>\\\\\\\*\\\\\\\* element to store <style> and <link> elements

Use the CSS \\\\\\\*\\\\\\\*color\\\\\\\*\\\\\\\* property for text colors

Use the CSS \\\\\\\*\\\\\\\*font-family\\\\\\\*\\\\\\\* property for text fonts

Use the CSS \\\\\\\*\\\\\\\*font-size\\\\\\\*\\\\\\\* property for text sizes

Use the CSS \\\\\\\*\\\\\\\*border\\\\\\\*\\\\\\\* property for borders

Use the CSS \\\\\\\*\\\\\\\*padding\\\\\\\*\\\\\\\* property for space inside the border

Use the CSS \\\\\\\*\\\\\\\*margin\\\\\\\*\\\\\\\* property for space outside the border



=================================================================



Selector = Tags are selected by something called Selector.



Type Selector = html element's tag name without <> brackets. with {property: value;}



Descedent Selector = Selecting only tag that are children of another tag.



Pseudo Selector = used to modify the appearance of html tag based on some type of action or behavior. Ex - a:hover {textdecoration:underline; color: darkened}





===================================================================



Tag Types: 

\\\* Block-Level Tag : Block-level tags take up the entire width of the container (screen).	

			Ex - h1, h2, h3, p, ul, li

\\\* Inline-Level Tag : These tags, don't try to take up entire width than they need.

			Does not take up the entire width. It flows with text and other content around it. (Go with flow)

			Ex - <a>, img, input, label





Note - to convert block-level tag to inline tag,   use  =     display:inline-block    inside selector class inside style tag or css file

===================================================================

\*\*Box Model: -  Box contains =  content Area, Padding, Border, Margin (Trick to remember order for BoxModel - relate with bottom part of G...)\*\*



full box = + Content Area width 

\&nbsp;	   + padding-left + padding-right

\&nbsp;	   + border-left + border-right

\&nbsp;	   + margin-left + margin-right





Applying padding to one side at a time in html element tag

Ex - h2{

\&nbsp;	padding-top: 6px;

\&nbsp;	padding-right: 3px;

\&nbsp;	padding-bottom: 0;

\&nbsp;	padding-left: 0;

\&nbsp;	}



writing shorthand to apply all side padding at a time-

Ex - h2 {

\&nbsp;	padding: 6px 3px 0  0;

\&nbsp;	}



Note- we don't write px with zero. 

\&nbsp;	Order of sides are always: top, right, bottom, then left.

\&nbsp;	Margin and Padding are alays follows above orders,

\&nbsp;	 but border follows :  width, Style and Color (instead of top, right, bottom, left)



\&nbsp;	if we have to give border for (one side) left, then we use propery like -   border-left: 6px, solid, black.

\&nbsp;	To apply border for all side, Ex - border: 6px, solid, black.







Padding: Padding is used to control the \*size of a box\* without adjusting the size of content written inside the box.

\&nbsp;	Means - It will increase width between content written inside the box and the box.



To Reset default marign, padding and borders of browser: 

\&nbsp;		html, body, h1, h2, h3, p, ol, ul, li, a { 

\&nbsp;							padding: 0;

\&nbsp;							border: 0;

\&nbsp;							margin: 0;	

\&nbsp;							}



Summary: Padding can be used to adjust spacing inside a container

\&nbsp;	 Margin can be used to adjust spacing between containers.





Margin: Margin is used to control the space between boxes.

====================================================================
JavaScript
====================================================================

Q. When is "id" attribute used?



id attribute is used to uniquely identify an element on a web page. It plays a crucial role in styling, scripting, and navigation.



Where It’s Used:

* Styling a specific element. (using css)
* Targeting an element with JavaScript. (taking user input from html to js form)
* Linking to a section of the page (e.g., <a href="#section1">Go to Section 1</a>).
* Form labels and accessibility.



Q. How to get user input in javascript file from html script.

Ans - use id attribute in input tag, and add an eventlistner Ex - "onkeyup"

Ex - <input type="text" placeholder="Enter your name" id="nameError" onkeyup="validateName()">



===============================================================================================


window object in js.
========================

window object => is a global object, which is parent of root object(mukiya).  (Mukiya ka bhi baap h)
Ex - console.log(""); is also part of window object.

window object is created by your browser.


=======================================================

regular expression
=======================================================

------to check if an input value is only containing number or not--------------------

if (!/^\d+$/.test(caseid)) {
    caseIdError.innerHTML = "Only digits are allowed";
    return false;
}


✅ Why .test() is better here compare to .exec() :
.exec() returns detailed match info (an array) or null.
.test() returns a simple true or false, which is perfect for validation.
So for checking if caseid contains only digits, this is the clean and correct way:


✅ Summary:
Yes, /^\d+$/.exec(caseid) technically works, but it's not ideal for simple true/false checks.
Use .test() for cleaner, faster, and more readable validation.





























