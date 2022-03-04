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

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems)
};

//add new item
function addNewItem(e) {

    // console.log(input.value);

    //***boş girişi engelleme
    if (input.value === "") {
        alert("Add new item");
    }

    //***create element
    //create li
    const li = document.createElement('li');
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value)); // form içinden aldığımız değeri text olarak ekliyoruz
    //create a
    const a = document.createElement('a');
    a.className = "delete-item float-right"; //burada classList de kullanılır 
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';
    //add a to li
    li.appendChild(a);
    //add li to ul
    taskList.appendChild(li);

    //clear input : eleman ekleme sonrası form içinin temizlenmesi
    input.value = '';

    // console.log(li);

    e.preventDefault();
};

//delete an item
function deleteItem(e) {

    //delete confirmation
    if (confirm('Are you sure?')) {

        //delete icon click check
        if (e.target.className === 'fas fa-times') {
            // console.log('delete clicked');
            //delete itemdan 2 parent yukarı çıkarsak silmek istediğimiz yere ulaşmış oluruz
            e.target.parentElement.parentElement.remove();
        }

    };


    e.preventDefault();
    // console.log(e.target);
};

//delete all items
function deleteAllItems(e) {

    // taskList.innerHTML = "";

    //delete confirmation
    if (confirm('Are you sure?')) {

        taskList.childNodes.forEach((item) => { //Childnodesda text lerde gelir
            if (item.nodeType === 1) { // text değil sadece li lerin gelmesi için
                // console.log(item);
                item.remove();
            }

        });

    };




    //yine bir a etiketi olduğu ve sayfayı refresh etmeye meyilli olduğu için preventDefault ekledim. Eğer button ve type ı button olursa (submit değil!!!) o zaman gerek yok.
    e.preventDefault();
}