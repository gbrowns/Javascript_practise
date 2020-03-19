/**
 * ------> TO - DO <-------
 */
//main function declaration
//declare a variable with prompt() for input
//run a switch loop test in a function within the main function
//return inner function
//invoke main function

function myFunction() {
    var animal = prompt("enter animales name: ");
    function showAnimal() {
      switch(animal){
        case "cow":
        case "dog":
        case "hen":
          console.log(`${animal} is a domestic animal`);
          break;
          
        case "hyena":
        case "cheetah":
        case "buffalo":
          console.log(`${animal} is a wild animal`);
          break;
        
        default:
          console.log(`${animal} seems not an animal`);
      }
    }
    return showAnimal;
    }
    var animalType = myFunction();
    animalType();


    function processConfirm(answer){
      var result = "";
      if ( answer ) {
          result = "excellent!! we can play"
      }
      else{
          result = "maybe later then"
      }
      return result;
  }
  
  var confirmAnswer = confirm ("shall we play?");
  var theAnswer =processConfirm(confirmAnswer);
  alert(theAnswer);