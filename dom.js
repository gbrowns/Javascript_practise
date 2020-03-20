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

