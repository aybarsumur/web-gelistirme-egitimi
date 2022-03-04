// Dom - Event Listener

const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

// ilki event sonra ne olacağı
// btn.addEventListener('click',function(){
//     console.log('btn clicked');
// });

// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

// function btnClick(){
//     console.log('btn clicked');
// }

// function btnClick2(){
//     console.log('btn 2 clicked');
// }



//normalde "a" linkler tıklandıklarındaki görevleri hreflerinde yazılı olan like gitmektir. Yani tıklandığı zaman görevi gereği sayfayı başka bir kısma yönlendirmek ister ve refresh olayı olur. Biz bu a etiketinin normal davranışını yapmasının önünü kesmek istersek. preventDefault. bunun için fonksiyonların içine gelen bir event parametresi var.
//click yerine alternatifler => https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
btn.addEventListener('click',function(e){ 
    
    let val;

    val = e;

    val = e.target; // hangi butonun tıklandığını verir.
    val = e.target.id; // tıklananın id si
    val = e.target.classList; // ['btn', 'btn-outline-danger', 'btn-sm', 'delete-all', 'float-right']
    val = e.type; //click

    console.log(val);

    e.preventDefault(); // bununla a linkinin sayfayı yenilemesini engellemiş olduk

});
