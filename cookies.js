//checking whether cookies are enable on loading a page

document.getElementById("con1").innerHTML=checkCookies(); //get an id from a page & invoke function

//function declaration
function checkCookies(){
  //condition for enable cookies on page
  if(navigator.cookieEnabled==true){
    
   alert("cookies enabled");
  }
  else{
    
    alert( "cookies are not enabled");
  }
  
}

//END