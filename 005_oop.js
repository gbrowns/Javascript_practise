//temperature to farenheits and celcius

//temperature change to Farenheits
function changeFah(temp){
     this.temp = temp;

     //method to change temperature from celcius to farenheits
    this.getFarenheits = function () {

          return (this.temp * 9/5 + 32); //converts temperature to farenheits
     };

}

//write a method on the prototype
changeFah.prototype.getCelcius = function (){return (this.temp - 32) * 5/9;}

//create an instance of an object
let tempC = new  changeFah(500)

console.log(`${tempC.getFarenheits()} Farenheits`)

//temperature change to celcius------------------------------------------------------------------------------------------------------------------------

function changeCel(temp){
     this.temp = temp;
}

//create an instance of an object
let tempF = new changeCel(12200);

// access getCelcius method on the changeFah prototype
tempF.__proto__.__proto__ = changeFah.prototype; 

console.log(`${tempF.getCelcius()} Celcius`);