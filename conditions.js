// if condtion statement

if (condition){
     //expression
}

// if & else condition

if (condition){
     //expression
}else{
     //expression2
}

//if  & else_if  & else condition
if (condition){
     //expression1
}
else if(condition1){
     //expression2
}else{
     //expression3
}

/*----examples--*/

var name = "";
if (name = null){
     console.log("name is empty");
}
var count = 0;
if (count <=10 ){
     count++;
     console.log
}

/*---combine FUNCTION-if & else conditon, do-while loop, for loop, while loop*/

//A GRADING SYSTEM PROGRAMS THAT CHECKS THE INPUT OF A STUDENT'S NAME AND MARK ..
//AND THEN GIVES A COMMENT ON THE PERFORMANCE.

//add() => {}
function add(){
     if (marks >= 75 && marks <= 100){
       
       console.log(`--Marks for best grades--`);
       
       let a = 74;
       do{
         a++;
         console.log(a.length);
       }while(a <= 99);
       
       console.log(`${marks} is a grade A`);
       console.log(`Very good!!, ${name}`);
       
     }
     else if(marks >= 60 && marks <= 75){
       
       console.log(`--Marks for moderate grades--`);
       
       for (i = 60; i <= 74; i++){
         
         console.log(i);
       }
       
       console.log(`${marks} is a grade B`);
       console.log(`Good!!, ${name}`);
       
     }else{
       
       console.log(`--Marks for average grades--`);
       
       
       let c = 45;
       while(c <= 59 ){
         c++;
         console.log(c);
       }
       
       console.log(`${marks} is a grade C`);
       console.log(`You can do better, ${name}`);
       
     }
    }
   
   var name = prompt('Enter your name');
   var marks = prompt(`Enter you marks ${name}`);
   add(name,marks);
   
