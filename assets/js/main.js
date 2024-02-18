const inputElementToDo = document.getElementById('itemInput');
const addButtonToDo = document.querySelector('.button');
const ulItems = document.querySelector('.ulList');
const formElement = document.getElementById('formElement')
const clearAll = document.querySelector('.clear')


formElement.addEventListener('submit', function(e) {
    e.preventDefault();

    const valueInput = inputElementToDo.value;

    if(valueInput == ""){
        return alert('The field is empty');
    };


    const li = document.createElement('li');
    li.classList.add("list")

    li.textContent = valueInput;

    // const deleteBtn = document.createElement('button');
    // deleteBtn.classList.add('deleteBtn')
    // deleteBtn.textContent  = 'Delete';
    // deleteBtn.addEventListener('click', function() {
    //     li.remove();
    // })

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-xmark');
    deleteIcon.addEventListener('click', function() {
        li.remove();
    })


    ulItems.appendChild(li);
    li.appendChild(deleteIcon);


    inputElementToDo.value = "";

});

clearAll.addEventListener('click', function() {
    ulItems.innerHTML = " ";
});


// ----- BURGER BAR ----- //

var navToggle = document.getElementById('burger-menu');
var navMenu = document.getElementById('menu');

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.toggle('active-nav')
        })
    }

  