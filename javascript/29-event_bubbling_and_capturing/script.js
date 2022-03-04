// Event Bubbling : 
//içten dışa doğru tüm elemanların etkilenmesi. taş dalgası gibi. kapsayanları etkileyip içten dışa doğru bir aktarım yapar.

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


// form.addEventListener('click', function(e){
//     console.log("form"); 
//     e.stopPropagation(); // bununla bubbling engellenir.
// });

// cardBody.addEventListener('click', function(e){
//     console.log("card body"); 
//     e.stopPropagation();
// });

// card.addEventListener('click', function(e){
//     console.log("card"); 
//     e.stopPropagation();
// });

// container.addEventListener('click', function(e){
//     console.log("container");
//     e.stopPropagation();
// });


// Event Capturing : Bubbling in tersi dıştan içe doğru ilerler.

// form.addEventListener('click', function(e){
//     console.log("form"); 
//     e.stopPropagation(); // capturing i engeller . ama hep en dışta kalır
// },true);

// cardBody.addEventListener('click', function(e){
//     console.log("card body"); 
//     e.stopPropagation();
// },true);

// card.addEventListener('click', function(e){
//     console.log("card"); 
//     e.stopPropagation();
// },true);

// container.addEventListener('click', function(e){
//     console.log("container");
//     e.stopPropagation();
// },true);


// Örnek

// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     });
// });

// console.log(deleteItems);


//YANİ YUKARIDAKİ GİBİ ELEMENLARA TEK TEK ULAŞIP BİRŞEY YAPTIRMAKTANSA AŞAĞIDAKİ GİBİ GENEL BİR KAPSAMDAN ÇALIŞIRSIN(AĞIDA UL DEN FA-TIMES LARA)
const ul = document.querySelector('ul');

ul.addEventListener('click', function (e) {

    if (e.target.className === 'fas fa-times') {
        // console.log("icon");
        console.log(e.target.parentElement.parentElement.remove());

        e.preventDefault();
    }

});