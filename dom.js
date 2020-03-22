/*--FINDING HTML ELEMENTS-- */
//find an elemrnt by ID
document.getElementById("id").innerHTML="new value"

//find an element by the tag name
document.getElementsByTagName()

//find elements by class names
document.getElementsByClassName()

/*---CHANGING HTML ELEMENTS-- */

//changing the innerHTML of an element
Element.innerHTML = "new value";

//changing attribute value of an HTML element
Element.attribute = "new value"

Element.setAttribute(attribute,value)

//change the style in an HTML element 
Element.style.property = "new style"

/**ADDING AND DELETING ELEMENTS */

//create an HTML element
document.createElement(element)

//remove an HTML element
document.removeChild(element)

//add into an HTML element
document.appendChild(element)

//rreplace an HTML element
document.replaceChild(new,old);

//write into the HTML output stream
document.write("written message")

/**ADDING EVENT HANDLERS */
document.getElementById('id').onclick = function(){//block of code}

/**FINDING HTML OBJECTS */

document.anchors  //returns  <a> that have a name attribute
document.baseURI //returns absolute base URi of the document
document.URL //returns the complete url of the document
document.scripts //returns all <script>  elements
document.body //returns the <body> elements
document.forms //return all <form> elements
document.images //return all <img> elements
document.cookie //returns the document cookie
document.doctype //returns the document's doctype
document.documentElement //returns the <html> element
document.documentMode //returns the mode used by the browser
document.lastModified //returns date and time the document was modified
document.readyState //returns the loading state of the document
document.implementation //returns the DOM  implementation


/**DOM NODES */
// 1.parentNode
// 2.childNodes
// 3.firstChild
// 4.lastChild
// 5.nextSibling
// 6.previousSibling

//takes the textNode with the id value and asign it to myTItle

var myTitle = document.getElementById("demo").innerHTML;

var myTItle = document.getElementById("demo").firstChild.nodeValue;

var myTItle = document.getElementById("demo").childNodes[0].nodeValue;

/**Node names */

// 1.nodeName is a read-only
// 2.nodeName of an element is the same to the tag name
// 3.nodeName of attribute node is the attribute name
// 4.nodeName of a text node is always #text
// 5.nodeName of document node is always a #document

document.getElementById("demo").innerHTML = document.getElementById("demo2").nodeName;

//example practises

// create a <p> element and asign it to variable par
var par = document.createElement("p");

//create the text value for the <p> tag and asign to variable tex
var tex = document.createTextNode("Having fun with Dom");

//set the value of text to the <p> 
par.appendChild(tex);

//grab the <div> with the id - "con1"
var element = document.getElementById("con1");

//inserts the newly created element to the th inner HTML
element.appendChild(par);

//set css property to the newly created element by DOM
par.style.color = "blue"
par.style.fontSize = "30px"

//setting js event listener
par.addEventListener("click", ()=>{alert("mouse over me");});
par.addEventListener("mouseout", ()=>{alert("mouse out");});

//removing an element

element.remove();

//find the element you want to remove

var myElement = document.getElementById("di1");

//remove() removes the element

myElement.remove();

/**removing a child Node */

//find parent element
var parent = document.getElementById("parentId");

//find the child element
var child = document.getElementById("childId");

//remove child from parent
parent.removeChild();

/**Replacing HTML elements */

//create an element
var elem1 = document.createElement("h2");
var elem2 = document.createTextNode("Creating an element text");
elem1.appendChild(elem2);

//grab an elements from the inner HTML
var parentElem = document.getElementById("prntId");
var nodeElem = document.getElementById("childId");

//replace the old element with the newly created elemented
parentElem.replaceChild(elem1, nodeElem);

/**DOM collection */

var myPar = document.getElementsByTagName("p");
var myhed = document.getElementsByTagName("h1");

document.getElementById("mydiv1").innerHTML = `this document contains ${myPar.length} paragraphs`;

document.getElementById("mydiv").innerHTML = `this document contains ${myhed.length} headers`;

/**using the querySelector() method */
document.querySelector("css_selector");
