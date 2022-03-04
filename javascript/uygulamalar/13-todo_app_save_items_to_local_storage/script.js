// Uygulama : Todo App

// UI variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

// const items = ['item 1', 'item 2', 'item 3', 'item 4'];
let items;

//load items
loadItems();

//call event listeners
eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
};

//load items
function loadItems() {

    items = getItemsFromLS();

    items.forEach(item => {
        createItem(item);
    });
};

//get items from local storage
function getItemsFromLS() {
    if(localStorage.getItem('items') === null ){
        //eğer local storage içindeki items boş ise yukarıda tanıumladığımız itemsı boş bir array yapalım.
        items = [];
    }else {
        //daha önceden item var ise JSON.parse ile diziye dönüştürerek itemları alalım
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
};

//set item to local storage
function setItemToLS(text) {
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
};

function deleteItemFromLS(text) {
    //elemanları getirdik
    items = getItemsFromLS();

    //elemanları bir döngü içine sokalım
    items.forEach((item,index) => {
        if (item === text) {
            //item ile fonksiyona yolladığımız textler aynı ise splice metodu ile o itemın indexindeki elemanı silecek.
            items.splice(index,1);
            console.log(`item text: ${item}, index: ${index}`)
        };
    });
    //listenin güncel halini de kaydediyoruz
    localStorage.setItem('items',JSON.stringify(items));
};

//create item
function createItem(text) {

    //***create element
    //create li
    const li = document.createElement('li');
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text)); // form içinden aldığımız değeri text olarak ekliyoruz
    //create a
    const a = document.createElement('a');
    a.className = "delete-item float-right"; //burada classList de kullanılır 
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';
    //add a to li
    li.appendChild(a);
    //add li to ul
    taskList.appendChild(li);

};

//add new item
function addNewItem(e) {

    // console.log(input.value);

    //***boş girişi engelleme
    if (input.value === "") {
        alert("Add new item");
    }

    // create item
    createItem(input.value);

    // save to local storage
    setItemToLS(input.value);

    //clear input : eleman ekleme sonrası form içinin temizlenmesi
    input.value = '';

    // console.log(li);

    e.preventDefault();
};

//delete an item
function deleteItem(e) {

    //delete confirmation


    //delete icon click check
    if (e.target.className === 'fas fa-times') {

        if (confirm('Are you sure?')) {
            // console.log('delete clicked');
            //delete itemdan 2 parent yukarı çıkarsak silmek istediğimiz yere ulaşmış oluruz
            e.target.parentElement.parentElement.remove();

            //delete item from local storage
            // console.log(e.target.parentElement.parentElement.textContent);
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        };

    };


    e.preventDefault();
    // console.log(e.target);
};

//delete all items
function deleteAllItems(e) {

    // taskList.innerHTML = "";

    //delete confirmation
    if (confirm('Are you sure?')) {

        // taskList.childNodes.forEach(element => { //Childnodesda text lerde gelir
        //     console.log(element);
        //     if (element.nodeType === 1) { // text değil sadece li lerin gelmesi için
        //         // console.log(element);
        //         element.remove();
        //     }
        // });

        //tasklistin firstchildı olduğu sürece
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        //local storagedan tüm elemanları sil
        localStorage.clear();
    };


    //yine bir a etiketi olduğu ve sayfayı refresh etmeye meyilli olduğu için preventDefault ekledim. Eğer button ve type ı button olursa (submit değil!!!) o zaman gerek yok.
    e.preventDefault();
};