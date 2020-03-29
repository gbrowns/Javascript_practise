/**THROW----TRY-----CATCH----FINALLY */

//try---statement lets you test a block of code for errors
//catch---lets you handle the error
//throw---lets you create custom errors
//finally---lets you execute code after try--catch,,regardless of the result

/**errors can be due to coding errors,errors due to wrong inputs,and other unforeseeable things*/


//example
try{
     //block of code to try
}
catch(err){
     //block of code to handle the error
}
finally{
     //block of code to be executed regardless of the try/catch results
}

//example1
try{
     adddlert("welcome user");
}
catch(err){
     document.getElementById("demo").innerHTML = err.message
}

//example 2
var message, x;
message = document.getElementById("msg");
message.innerHTML = "";
x = document.getElementById("input");
     //try a block of code to check errors
     //use "throw"  to send back error messages
     try{
          if(x == "") throw "empty input";
          if( isNaN(x) ) throw "input not a number";
          x = Number(x);
          if( x < 5 ) throw "input is too low";
          if( x > 10) throw "input too high"
     }
     //handle the errors tested using the catch( ) method
     catch(err) {
          message.innerHTML = err;
     }

     //error object properties
     /**
      * 1.name //----->sets or returns an error name
      * 2.message //---->sets or returns an error message(a string)
      */
