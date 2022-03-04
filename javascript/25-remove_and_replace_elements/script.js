// Dom - Remove and replace elements

const tasklist = document.querySelector('#task-list');


// ***removing elements***

//remove();

//tasklist.remove();
// tasklist.childNodes[1].remove();
// tasklist.children[1].remove();


//removeChild();

// tasklist.removeChild(tasklist.children[3]);


// ***removing attribute***

// tasklist.children[2].removeAttribute('class');

// for(let i=0; i<tasklist.children.length; i++) {
//     tasklist.children[i].removeAttribute("class");
// }



// ***replacing element***
// const cardHeader = document.querySelector('.card-header');

// // create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parentA = document.querySelector('.card');
// parentA.replaceChild(h2,cardHeader);

//console.log(cardHeader);

// ***Classes

let val;

link = tasklist.children[0].children[0];

// val = link.className; //string olarak gelir
// val = link.classList; //dizi olarak gelir  ['delete-item', 'float-right' ]
// val = link.classList[0]; //delete-item
// val = link.classList[1]; //float-right

link.classList.add('new'); // ['delete-item', 'float-right', 'new']
link.classList.remove('new'); // ['delete-item', 'float-right']

// Attributes
val = link.getAttribute('class'); //delete-item float-right
val = link.getAttribute('href'); //#
val = link.setAttribute('href','http://google.com');
val = link.hasAttribute('href'); //true

console.log(val);
