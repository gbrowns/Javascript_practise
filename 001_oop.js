//create an object person
var person = {
     name: "Chris",
     age:     18,
     gender: "male",
     hallo:    function(){
          console.log(`Hi!, i am ${this.name} and am ${this.age} years`) //this key word refers to the object name 'person'
     }
}

console.log(person.hallo())
//constructor function
function Person(first,last,age,gender,interests){
     this.name = {
          first : first,
          last  : last
     };
     this.age = age;
     this.gender = gender;
     this.interests = interests;
     this.bio = function(){
          console.log(`${this.name.first } ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`)
     };
     this.greeting = function(){
          console.log(`Hi!, I'm ${this.name.first}.`);
     };
}
//constructor call
let person = new Person('Bob','Smith',18,'male',['reading','singing']);
let person1 = new Person('Kate','Williams',25,'female',['skiing','dancing']);

console.log(person.greeting());
console.log(person.bio());
console.log(person1.greeting());
console.log(person1.bio());