/**
 * simple to-do list using arrays and array methods
 */

console.log("CONNECTED!")


var todos = [];

var input = prompt("what would you like to do?");

//should be continous
while(input !== "quit"){

	if (input === "list"){
		//display list in the array
		todos.forEach((task,index) => console.log(index + ":" + task));
	
	}else if(input === "new"){
		//ask for new to-do
		var newTodo = prompt("Enter new activity");
		//add to-do in array
		todos.push(newTodo);
	}else if(input === "delete"){
		//prompt to input delete item
		var indexItem = prompt("enter index of item to delete");
		//method to delete
		todos.splice(indexItem,1);
		//alert that item has been deleted
		console.log(`item with index ${indexItem} deleted`);
		
	}
	
	input = prompt("what would you like to do?");
}
console.log("App quited,Succesfull!!")



