/**GETTING STARTED WITH EVENT-LISTENERS */

addEventListener() //Method
// 1-attatches an event handler to a specified element
// 2-attaches an event handler to an element without overwritting the existingevent handlers
// 3-many event handlers can be added to a single element
// 4-same event handlers can be added to same one element 
// 5-event listeners can also be added to DOM objects

//syntax
element.addEventListener)() //----->adds event listener
removeEventListener() //---------->removes event listeners

//example 1
document.getElementById("id1").addEventListener("click", function(){
     alert("hello world!!");
});

//examole 2
document.getElementById("id1").addEventListener("mouseover", myFunction);

document.getElementById("id1").addEventListener("auxclick", ()=>{alert("hello world!!");});

let btn = document.getElementById("btn1");

let validate= (btn) => {
     if (btn == ""){
          alert("empty input");
     }else{
          alert("successfull!!");
     }
}
//adding diferent event listener to one element
btn.addEventListener("click", validate, true); //true-event capturing
btn.addEventListener("click", myFunction, false); //false-event bubbling[default:]


//write a function to be embedded to the even listener
var myFunction = () =>{alert("hello world");}


/**THE removeEventListener() method */
//removes event handlers that have been attatched with the addEventListener() method

element.removeEventListener("click", myFunction);

