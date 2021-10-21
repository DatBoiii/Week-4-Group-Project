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
        let that = this.ToDocontainer;
        paragraph.addEventListener('click', function () {
            paragraph.style.textDecoration = "line-through";
        /*
            setTimeout(function () {
                that.removeChild(paragraph);
            }, 1000);
        */
        })
        
        paragraph.addEventListener('dblclick', function() {
            that.removeChild(paragraph);
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


addToDoButton.addEventListener('click', function () {
    toDoList.addButton();
})


clearToDoButton.addEventListener('click', function () {

   toDoList.clearButton();
})

