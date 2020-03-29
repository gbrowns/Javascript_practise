//variable declaration;

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var siku = date.getDay();


//switch loop to get the days of the week(siku)
switch(siku){
  case 0:
    siku = "Sunday"
    break;
  case 1:
    siku = "Monday";
    break;
  case 2:
    siku = "Tuesday";
    break;
  case 3:
    siku = "Wednesday";
    break;
  case 4:
    siku = "Thursday";
    break;
  case 5:
    siku = "Friday";
    break;
  case 6:
    siku = "Saturday";
    break;
}
//display the full date on the console
console.log(`The date today is ${siku}, ${day}/${month}/${year}`);


//example two
//using toLocaleTimeString property and setInterval() method

let myTime = setInterval(myTimer, 1000);

function myTimer(){
  let d = new Date();
  document.getElementById("htmlid").innerHTML = d.toLocaleTimeString();
}