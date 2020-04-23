//objects as regular function

function peopleFactory(age,name,state){

     //instantiate an empty object literal
     let temp = {};

     temp.age = age;
     temp.name = name;
     temp.state = state;
     
     //instance of a method
     temp.describe = function(){
          console.log(`${temp.name[0]} ${temp.name[1]} comes from ${temp.state} and is ${temp.age} years`)
     }

     return temp;
}

//object constructor

var person1 = new  peopleFactory(25,["John","Doe"],"Chicago");

console.log(person1.describe());