//program to convert temperature in celcius to farenheit
let message = "";
function celToFar(celcius){
     var cTemp = celcius;
     var cToFah = cTemp * 9/5 +32;
     message = `${cTemp} Celcius   is   ${cToFah} Farenheit`
     console.log(message);
}
celToFar(30)

//program to convert temperature in Farenheit to celcius
function farToCel(farenheit){
     var fTemp = farenheit;
     var fToCel = (fTemp - 32) * 5/9;
     message = `${fTemp} Farenheit   is   ${fToCel} Celcius`
     console.log(message)
}
farToCel(86)