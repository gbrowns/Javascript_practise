//.more about objects


//object literals
const object = {
     param1: ["John"," Doe"],
     param2: "value2",
     param3: 234
}
//console.log(object.param1[1])  //selecting index value

//using object constructors
function objectN (param1,param2,param3){
     this.param1 = "value1";
     this.param2 = "value2";
     this.param3 = "value3";

}

//using the for....in loop
let text = "";
var x;
for ( x in object){
     text += object.param1[x]
}
//console.log(text);


//adding new properties in an a object

const person = {
     firstName: "Brian",
     lastName : "Doe",
     nickname : "brandoe",
     number     : 24,
     id             : 1234567,
     fullName  : function ( ) {
          return `${this.firstName} ${this.lastName}`; //object's method --is a property containing a function defination

     }
     
};
console.log( person.fullName()); //accessing an objects method

/***** ******** ********** ********* ******** ******* ****/

delete person.id //deleleting a property plus a value

/***** ******** ********** ********* ******** ******* ****/
//adding a method to an object
person.name = function (){
     return this.nickname + this.number;
}
console.log(person.name());

/***** ******** ********** ********* ******** ******* ****/

person.career = "Engineer";
person.DOB = `12/ 12/ 2020`;
person.age = 13; //add property age and a asign a value
console.log( person); //accessing object's properties


//js object accessors
var people = {
     firstName : "John",
     lastName : "Doe",
     language : "en",
     get lang(){                                  //getters
          return this.language;
     }
};

let shows = {
     show1: "wekeza",
     show2: "trivia",
     show3: "",
     set trans(trans) {         //setters
          this.show3 = trans;
     }
}
 
shows.show3 = "trans-vision";

/***** ******** ********** ********* ******** ******* ****/

//pobject defination
var obj = {counter : 0}

//define setters and getters

Object.defineProperty(obj, "reset", {
     get : function(){this.counter = 0; }
});

Object.defineProperty(obj, "increment", {
get : function(){this.counter++;}
} );

Object.defineProperty(obj, "decreament", {
     get : function(){this.counter--;}
});

Object.defineProperty(obj, "add", {
     set : function(value){this.counter += value;}
});

Object.defineProperty(obj, "subtract", {
     set : function(value){this.counter -= value;}
});

obj.reset;
obj.add = 10;
obj.subtract = 1;
obj.increament;
obj.decreament;

console.log(obj.counter);

/***** ******** ********** ********* ******** ******* ****/

//functional objects
function peeps(name1,name2,age1,eyecolor){
     this.name1 = name1;
     this.name2 = name2;
     this.age1     = age1;
     this.eyecolor = eyecolor;
     
}
//invoke function

let job = new peeps("Job","Kayle",35,"blue"); //..creating the object

job.salary = 50000; //adding a new property into the object

console.log(job);

/***** ******** ********** ********* ******** ******* ****/
//prototype inheritance
peeps.prototype.nationality