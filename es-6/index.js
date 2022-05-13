/**
 * FUNCTIONAL PROGRAMMING WITH JS ES6
 * @param {*} values 
 * @param {*} fn 
 * @returns 
 * 
 *[nodemon] npm install nodemon --save-dev
 * 
 */

//arrow functions
const add = (a,b) => a + b;

//function delegates
const isZero = n => n === 0;

const a = [0,1,00,3,4,0,0,1];

console.log(a.filter(isZero).toString().split(" "))

//expression instead of a statement
const salutaion = (hour, name) => hour < 12 ? `Goodmorning, ${name}` :`Good afternoon, ${name}`;

console.log(salutaion(10, "Brown"))


//higher order function
function mapConsecutive(values, fn){

    let results = [];

    for (let i = 0; i < values.length-1; i++){
        results.push(fn(values[i], values[i+1]));
    }

    return results;
}

const letters = ['a', 'b', 'c','d','e', 'f', 'g', 'h', 'i', 'j'];
let twoByTwo = (x,y) => [x,y];

//outputs
console.log(mapConsecutive(letters, twoByTwo));
console.log("Sum =",add(2,5));


//currying ==> curried function
const convertUnit = (toUnit, factor, offset = 0) => input => ((offset + input) * factor).toFixed(2).concat(toUnit);


const milesToKm = convertUnit('Km', 1.60936, 0);
const poundsToKg = convertUnit('Kg', 0.45460, 0);
const farenheitToCelcius = convertUnit(' degree C', 0.5556, -32);

//farenheitToCelcius(98)
//milesToKm(0)
console.log(poundsToKg(2.5));
console.log(milesToKm(1));
console.log(farenheitToCelcius(98));

const weightsInPound = [5, 9, 1, 3.4];
const weightsInKg = weightsInPound.map(poundsToKg); //what currying does

console.log(weightsInKg);


//method chaining
let cart = [
    {name: "Drink", price: 200.457},
    {name: "Steak", price: 1000.02},
    {name: "Drink", price: 300.76}
];

let totalDrink = cart.filter(x => x.name === "Drink")
                     .map(x => x.price)
                     .reduce((total, x) => total += x)
                     .toFixed(2);

console.log(cart)
console.log(`Total drink cost Ksh.${totalDrink}`);