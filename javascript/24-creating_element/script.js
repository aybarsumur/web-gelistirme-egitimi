// Dom - Creating Element

// create element
const li = document.createElement("li"); //<li></li>

// add class
li.className='list-group-item list-group-item-secondary'; //<li class="list-group-item list-group-item-secondary"></li>

// add attribute
li.setAttribute("title", "new item"); //<li class="list-group-item list-group-item-secondary" title="new item"></li>
li.setAttribute("data-id","5");

// text node
const text = document.createTextNode('new item');
li.appendChild(text); //<li class="list-group-item list-group-item-secondary" title="new item">new item</li>

const a = document.createElement("a");
a.setAttribute("href","#");
a.className="delete-item float-right";
a.innerHTML='<i class="fas fa-times"></i>';

// append a to li
li.appendChild(a); //<li class="list-group-item list-group-item-secondary" title="new item">new item<a href="#" class="delete-item float-right"><i class="fas fa-times"></i></a></li>

// append li to ul
document.querySelector("#task-list").appendChild(li);

console.log(li);