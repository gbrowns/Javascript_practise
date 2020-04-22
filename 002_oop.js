//undestanding inheritence and prototype in objects

/*define constructor function for employees*/
function Employees(name){
	this.name = name;
  this.salary = 10000;
 
  
}

Employees.prototype.getName = function(){return this.name;};
Employees.prototype.getSalary = function (){return this.salary;};


//create an instance of the employee object
let emp1 = new Employees('Klane');


console.log(emp1.getSalary());



/*define constructor function for managers*/
function Manager(name,department,salary){
	this.name = name;
  this.department = department;
  this.salary = salary;
 
}

//define a property on the manager's property
Manager.prototype.getDept = function (){return this.department;};



//create an instance of the manager object
let mgr = new Manager('Mr. Brown','sales',5000000);



//enable the manager object to get the getName method
//__proto__ property allows mgr object to have access of the getName method in the Employees prototype
mgr.__proto__.__proto__ = Employees.prototype;


console.log(mgr.getName());


//---------------------------------------------------------------------------------------
//constructor function
function Employees(name){
	this.name = name;
}

//create instance of objects

emp1 = new Employees('John');
emp2 = new Employees('kate');
emp2.companyName = "Elewa Kenya LTD"

//a method that is to be inherited by all employees
Employees.prototype.greetings = function (){console.log(`Hi ${this.name}`);}
Employees.prototype.companyName = "Great Code KE"
Employees.prototype.year = "2020"
console.log(emp2.greetings());
console.log(emp2.companyName);


let mediaKE = new Employees();
mediaKE.__proto__.companyName = "Royal Media Services"
let emp55 = new Employees('Kevin')
//console.log(emp55.year);

let nation = mediaKE
nation.__proto__.companyName = "Nation Group";
let emp44 = new Employees('Tina')
console.log(emp44.year);


let Person = {};

Person.name = {
								"first": "	John",
                "last" : "Doe"
							}
Person.age = 29;
Person.hobby = {
									"groupA": ['dancing','sing'],
                  "groupB": ['eating',{"travelA": "up-towns","travelB": "would-wide"},'skiing']
								}
Person.__proto__.hello = function(){console.log('Hello!!')}

console.log(Person.hello()); 


let person1 = Person;
person1.age = 20;
console.log(person1.hello());



//---------------------------------------------------------------------------------------


//creating private variables and methods

function Pizza(type,prize,size,crust){
	this.type = type;
  this.prize = prize;
  this.size = size;
	this.crust = crust;
  //this.hasBacon = true;

	//method
 this.describe = function(){
 
  console.log(`${this.size} ${this.type} with ${this.crust} crust costs ${this.prize}Ksh`);
  
  }
}

let pizza1 = new Pizza('chicken tika',1000,'large','medium');
let pizza2 = new Pizza('Peri peri',800,'median','thick');

//let compare = Pizza.prototype === pizza1.__proto__
Pizza.prototype.state = "hot";
//pizza1.state = "cold"u
pizza1.__proto__.place = "chicken inn"
pizza1.customerName = "John Doe"
pizza1.describe = function(){ console.log(`Hi ${pizza1.customerName}!\n${this.size} ${this.type} with ${this.crust} crust costs ${this.prize}Ksh`); }

console.log(pizza1);




let customer1 = pizza1;
customer1.name = "John"
customer1.place = "Gallitos"
customer1.prize = 1200
customer1.state = "warm"
customer1.__proto__.number = +254700076890;

let customer2 = pizza1
customer2.name = "Kate"


console.log(pizza1);



function Customer(name){
	this.name = name
}

let customerA = new Customer("John");
let customerB = new Customer("Alice");
console.log(Pizza.constructor); 
customerA.prototype.describe = Pizza;
customerA.prototype.prize = 1000;
console.log(customerA.eprototype);



console.log(myCar.description());