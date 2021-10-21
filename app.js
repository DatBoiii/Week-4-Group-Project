let addToDoButton = document.getElementById('addbutton');
let clearToDoButton = document.getElementById('clearbutton');

// To do list object

let toDoList = {
    ToDocontainer: document.getElementById('list'),
    inputField: document.getElementById('myinput'),

    addButton: function () {
        let paragraph = document.createElement('li');
        paragraph.innerText = myinput.value;
        this.ToDocontainer.appendChild(paragraph);
        myinput.value = "";
        paragraph.addEventListener('click', function () {
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick', function() {
            this.ToDocontainer.removeChild(paragraph);
        })
       
    },

  

    clearButton: function () {
        let list = document.querySelector('#list');

    // while array of list children at index 0 is not empty, remove child at index 0

        while (list.children[0] != null) {
            list.children[0].remove();
        }
    }


};

// call functions inside object

addToDoButton.addEventListener('dblclick', function () {
    toDoList.removeItem();
})

addToDoButton.addEventListener('click', function () {
    toDoList.addButton();
})


clearToDoButton.addEventListener('click', function () {

   toDoList.clearButton();
})

