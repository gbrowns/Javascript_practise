// objects as constructor function

//constructor function
function Person(name,age,gender,country){
     this.name = name;
     this.age = age;
     this.gender = gender;
     this.country = country;

     this.getDesc = function(){
          console.log(`${this.name},${this.age},${this.gender},${this.country}`);

     }
}

//object defination
let person1 = new Person("John Doe",25,"male","Kenya");

console.log(person1.getDesc())