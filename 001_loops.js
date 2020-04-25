//for loop

var days = ['sun','mon','tue','wed','thur','fri','sat'];

//iterate the array of days on a loop
for ( let i = 0; i <days.length; i ++){
	console.log(days[i])
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

total = 0;

for (let num = 0; num < 10; num++){
     total += num;
    
}

console.log(total)


//------------------------------------------------------------------------------------------------------------------------------------------------------------
//arrays with for loops

var fruits = ['banana','apple','oranges']
fruits.push("apple")
fruits.push("pineaple")
for (let i = 0 ; i < fruits.length ; i++ ){
     //console.log(fruits[i]);
}


//adding into array of list

var student = [];

student.push("name")
student.push("Tevin")
student.push("John")
student.push("Kayle")
student.push('wendy')
console.log(`List of students`);
for (let i = 0; i < student.length ; i++){
    console.log(`----------------`);
    console.log(`${i}.${student[i]}`);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------
//loop with objects

//object person

let Person = {
     "name": "John Doe",
     "age": 37,
     "gender": "male"
}

//forEach
Person.forEach(prop => {
     console.log(prop);
});

//array of students

const Students = ['John','Doe','Kate','Tina'];
/**for ..in loop */
for (let std in Students){
     console.log(`${std} ${Students[std]}`)
}

/**forEach */
Students.forEach(student => {
     console.log(student);
     
});

