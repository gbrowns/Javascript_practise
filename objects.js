//.more about objects


//object literals


Object = {
     param1: ["value","value"],
     param2: "value2",
     param3: "value3"
}
this.param1[0]  //selecting index value

//using object constructors

function objectN (param1,param2,param3){
     this.param1 = "value1";
     this.param2 = "value2";
     this.param3 = "value3";
}