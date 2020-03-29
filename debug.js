/**CODE DEBUGGING
 * 
 */
//involves searching for and fixing errors in programs
/**
 * helps in setting breakpoints(places where code execution can be stopped)
 * examines variables while the code is executing
 * Defination: -process of testing,finding and reducing bugs in a computer program
 */

 //using the console.log() method
 console.log(car);

 //setting break points
/**at each break point js code stops executing and lets the user to examine js values
 * after examination of values(use the play button to resume execution)
 * 
 */

 //the Debugger keyword
 /**
  * debugger--->stops execution of js and calls(if available ) the debugging function
  */
 var bellow = (user) => {
      user = document.getElementById("name1");
      var name = user;
      if (name.value ==true){
          debugger;
           document.getElementById("div1").innerHTML = "welcome"
           return false
      }
     
 }