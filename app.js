let addToDoButton = document.getElementById('addbutton');
let ToDocontainer = document.getElementById('list');
let inputField = document.getElementById('myinput')

addToDoButton.addEventListener('click', function() {
	let paragraph = document.createElement('li')
	paragraph.innerText = myinput.value;
	ToDocontainer.appendChild(paragraph);
	myinput.value = "";
	paragraph.addEventListener('click', function() {
		ToDocontainer.removeChild(paragraph);
	})
})