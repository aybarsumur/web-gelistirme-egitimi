// Dom - Traversing the dom

let val;

let list = document.querySelector('.list-group');

val = list;

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // text 3
val = list.childNodes[1].nodeType; // element 1

val = list.children;
val = list.children[0];
val = list.children[2];
val = list.children[2].textContent = 'new item';
val = list.children[3].children;

val = list.firstChild; // text
val = list.firstElementChild; //li.list-group-item.list-group-item-secondary

// val = list.lastChild; //text
val = list.lastElementChild; //li.list-group-item list-group-item-danger

val = list.childElementCount; //4

val = list.parentNode; //div.card.mt-3
val = list.parentElement; //<div class="card mt-3">
val = list.parentElement.parentElement; //div.container.p-3
val = list.parentElement.parentElement.parentElement; //body

val = list.children[0].nextSibling; //text
val = list.children[0].nextElementSibling; //li.list-group-item.list-group-item-secondary

val = list.children[3].previousSibling; //text
val = list.children[3].previousElementSibling; //li.list-group-item.list-group-item-secondary

console.log(val);

console.log("**************************");

for (let i = 0; i < list.childNodes.length; i++) {
    if (list.childNodes[i].nodeType === 3) {
        console.log(list.childNodes[i]);
    }
}