// Uygulama : Todo App

// UI variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

//call event listeners
eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);
}

//add new item
function addNewItem(e) {

    // console.log(input.value);

    //***boş girişi engelleme
    if(input.value === "") {
        alert("Add new item");
    }

    //***create element
    //create li
    const li = document.createElement('li');
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value)); // form içinden aldığımız değeri text olarak ekliyoruz
    //create a
    const a = document.createElement('a');
    a.className = "delete-item float-right";//burada classList de kullanılır 
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>';
    //add a to li
    li.appendChild(a);
    //add li to ul
    taskList.appendChild(li);

    //clear input : eleman ekleme sonrası form içinin temizlenmesi
    input.value='';

    // console.log(li);

    e.preventDefault();
}