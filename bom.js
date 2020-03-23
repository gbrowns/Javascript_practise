/**BROWSER OBJECT MODEL(BOM) */

//js window

window.open() //-->open a new window
window.close() //--:>close the current window
window.moveTo() //-->move the current window
window.resizeTo() //-->resize the current window

//js window screen
screen.width //returns the width of the visitor's screen in pixel
screen.height //returns the height of screen in pixel
screen.availWidth // returns the width of the screen minus interfaces such as windows taskbar
screen.availHeight //returns the height of the scren minus the windows taskbar
screen.colorDepth //returns number of bits used to display one color
screen.pixelDepth //returns the pixel depth of the screen

//js window location
window.location.href //returns the href (URL) of the current page
window.location.hostname //returns the domain name of the web host
window.location.pathname //returns the path and filename of the current page
window.location.protocol //returns the web protocol used (http: or https:)
window.location.assign("url to the new path") //loads a new document


//example
/**
 * assign event listener to the grabbed id of a button 
 * set an eventListener "click"
 * add a function that contains window.location.assign() method
 */
document.getElementById("btn").addEventListener("click", ()=>{windows.location.assign("www.facebook.com");});


//window history
window.history

window.history.back() //takes you to the previous page

window.history.forward() //takes you to the forwad page

/**EXAMPLE IMPLEMENTED*/

//declare two variables [back] and [forwad] 
//grab the back and forwad buttons with their id
let back = document.getElementById("backID");
let forwad = document.getElementById("forwadID");

//define a function that navigate back and forwad
function navigater(){
     //run a condition test
     if(back){

          window.history.back()

     }
     else if(forwad){

          window.history.forward()
     }

}

//add the click listeners to the buttons to perfom the function
back.addEventListener("click", navigater);
forwad.addEventListener("click", navigater);


/**JS WINDOW NAVIGATOR */
navigator.appName //returns application name of the browser
navigator.appCodeName //returns the app code name of the browser
navigator.platform //returns the platform of the browser(operating system)
navigator.cookieEnabled //returns true if cookies are 
navigator.product //returns the product name of the broswer
navigator.appVersion //returns version information about the 
navigator.language //returns browser language
navigator.onLine //returns true if th navigator is online
navigator.javaEnabled() //returns true if java is enabled


/**JS POP-UP BOXES */
//alert boxes
windows.alert("message")
     /*or*/
alert("message");

//confirm boxes
[OK] //-->returns true
[CANCEL] //-->returns false

//example
if (confirm("press a button!")){
     txt = "you pressed OK!";
}else{
     txt = "you pressed cancel!"
}

//prompt boxes

prompt("prompt message");

//displaying line breaks in popup boxes
alert("message1\nHow are you")


/**TIMING EVENTS */
setTimeout(function1, milliseconds) //executes a function after waiting a specified number of millisecond
setInterval(function2, milliseconds) //repeats the execution of function 


//example
//we have a button
let mybtn = document.getElementById("btn");

mybtn.addEventListener("click", setTimeout(myFunc, 3000));
mybtn.addEventListener("click", setInterval(myFunc, 3000));

function myFunc(){
     alert("Hello!!\nYou are welcomed")
}