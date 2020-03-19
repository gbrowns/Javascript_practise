//1.Introdution to functions
//2.nested functions(closures)
//3.advanced functions

/*----1.INTRODUCTION TO FUNCTION----*/
//first
function functionName(param1,param2){
     //block of code
     //return
}

functionName(value1,value2); //invocking function (so that the inside code will be exercuted)

//second
let functionName = function(param1,param2){
     //block of code
     //return
}

/*---EXAMPLES----?*/

function myAdder(num1, num2){
     let result = num1 + num2;
     return result;
}

myAdder(30, 70);

/*----EXAMPLE2----*/
let userMessage = function(name){
     console.log(`Webtrack user`);
     console.log(`welcome back ${name}`);

}
userMessage("john");


/*-----2.NESTED FUNCTIONS-----*/
//Scope
//Closure

function parentFunc(){
     var a = 1;

     function innerFunc1(){
          var b = 9;
          return a + b;
     }
     return innerFunc1;  // used to get the defination of the inner function
}
//innerFunc1() is a closure
let exact = parentFunc(); //sets the innerFunc1 to exact();      
console.log(exact());

/*-----ARROW FUNCTIONS---*/
(param1, param2, paramN) => { statements } 
(param1, param2, paramN) => expression
// equivalent to: => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements };
singleParam => { statements };

// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }
var element = [
     "hydrogen",
     "lithium",
     "oxygen"
];
element.map(function(element){
     

     return element.length;
});  //no arrow function

element.map((element) => {
     return element.length;
});   //reducing the size of the function by using arrow function

element.map(element => element.length); //simplifying functions further by use of arrow function


function person(){
     this.age = 0;

     setInterval(() => {
          this.age++;
     }, 1000);
}

function loop(x){
     if ( x >= 10){
          return loop( x+ 1);
     }
}

//more examples

function walkTree(node){
     if (node = null){
          return;
          for (let i = 0; i < node.childNodes.length; i++){
               walkTree(node.childNodes[i]);
          }
     }
}