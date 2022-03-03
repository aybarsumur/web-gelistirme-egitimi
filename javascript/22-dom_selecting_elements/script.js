// Dom - Selecting Elements

// **** SINGLE ELEMENTS ****
let val;

// *** getElementById ***
/*
val = document.getElementById('header');
val = document.getElementById('header').id;
val = document.getElementById('header').className;

val = document.getElementById('header');
// val = val.id;
// val = val.className;

val.style.fontSize='45px';
val.style.color = "red";
val.style.fontWeight = "bold";
// val.style.display = "none";
val.innerText = "my ToDo App"; // innerText
val.innerHTML = "<b>my ToDo App</b>"; // innerHTML

// *** querySelector ***

val = document.querySelector('#header');
val = document.querySelector('.card-header');
val = document.querySelector('li'); //ilk bulduğunu
val.style.color='red';
val = document.querySelector('li:last-child'); //ilk bulduğunu
val.style.color='blue';
val = document.querySelector('li:nth-child(2)'); //ilk bulduğunu
val.style.background='yellow';
val = document.querySelector('li:nth-child(3)'); //ilk bulduğunu
val.textContent='task item';

// document.querySelector('li').className="list-group-item list-group-item-primary";

document.querySelector('li').classList.add('active');

*/

// **** MULTIPLE ELEMENTS *****

// *** getElementsByClassName ***

//val = document.getElementsByClassName('list-group-item');
//val = document.getElementsByClassName('list-group-item')[2];

// val = val[2];
// val[1].style.color = "red";
// val[1].style.fontSize = "25px";
// val[3].textContent = "new item";

// for(let i=0; i<val.length; i++){
//     console.log(val[i]);
// }

// for(let i=0; i<val.length; i++){
//     console.log(val[i].style.color = 'white');
//     console.log(val[i].textContent = 'hello world');
// }


// *** getElementsByTagName ***

// val = document.getElementById('task-list');
// val = val.getElementsByTagName('a');


// *** querySelectorAll ***

//val = document.querySelectorAll('li');
// val.forEach(function(item){
//     console.log(item);
// });

// val = document.querySelectorAll('li');
// val.forEach(function(item,index){
//     item.textContent = `${index} - hello`;
// });

val = document.querySelectorAll('li:nth-child(odd)');
val.forEach(function(item){
    item.style.background = '#ccc';
});


console.log(val);