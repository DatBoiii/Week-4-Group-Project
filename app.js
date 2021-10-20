let addToDoButton = document.getElementById('addbutton');
let clearToDoButton = document.getElementById('clearbutton');
let ToDocontainer = document.getElementById('list');
let inputField = document.getElementById('myinput')

addToDoButton.addEventListener('click', function() {
	let paragraph = document.createElement('li')
	paragraph.innerText = myinput.value;
	ToDocontainer.appendChild(paragraph);
	myinput.value = "";
	paragraph.addEventListener('click', function() {
		paragraph.style.textDecoration = "line-through";
	})
    paragraph.addEventListener('dblclick', function() {
		ToDocontainer.removeChild(paragraph);
	})
})

clearToDoButton.addEventListener('click', function () {

    let list = document.querySelector('#list');
    console.log(length)
    while (list.children[0] != null) {
     //   console.log(i);
        console.log(list.children[0]);
        list.children[0].remove();
    }
})