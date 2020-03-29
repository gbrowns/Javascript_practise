//understanding js Classes
class className {
     constructor(param1){
          //code to be executed
     }
}

//creating object using classes
class car{

     constructor(brand){
          this.carname = brand;
     }

}

myCar = new car("ford");


//methods in classes
// constructor() ----is a class main method
//any other methods can be created

class Car{
     //main method
     constructor(type){
          this.Carname = type;
     }
     //other methods
     present(){
          return `i have a ${this.Carname}`;
     }
}
myVehicle = new Car("Ferari");
document.getElementById("id1").innerHTML = myVehicle.present();

//STATIC METHODS
/**
 * static methods are defined on the class itself and not on the prototype
 * static methods cannot be called object in stead they are called on the class
 * */

 class people{
      //main method
      constructor(name){
           this.personName = name;
      }
      //static method
      static greet(){
           return `hello ${this.personName}`;
      }
 }

 person = new  people("John Doe");

 //calling the static method
 document.getElementById("id1").innerHTML = people.greet();

 //INHERITANCE
 //use the 'extend ' keyword to create class inheritance
 //classes created with inheritance inherit all the methods from the previous or another class
 //useful for code reusability(reuse properties and methods of an existing class when you create a new class)
 
 "use strict";
 class model extends Car{
      
      //main method
      constructor(brand, mod){
           super(brand); //--->super() refers to the parent class
           this.model = mod
      }
      //another method
      show( ){
           return this.present() + ', it is a ' + this.model;
      }
 }
 mycar = new model("ford", "mustang");
 document.getElementById("demo").innerHTML = mycar.show();

 //GETTERS(get) AND SETTERS(set)

 //classes allow use of getters and settters
 /**getters and setters can be used on properties especially 
  * when one wants to do something special with the value 
  * before returning them or before setting them */

  class car{
       constructor(brand){
            this._carname = brand;
       }
       get carname(){
            return this._carname ;
       }
       set carname(x){
            this._carname = x;
       }
  }
  mycar = new car("ford");
  document.getElementById("demo").innerHTML = mycar.cname

