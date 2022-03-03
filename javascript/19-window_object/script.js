// Window Object

let val;
var a = 10; // let ile yazınca window içinde göremiyorsun
function abc(){
    return 0;
}

val = window;

//alert
//alert('Merhaba');

//prompt
// var b = prompt('bir sayı girin');
// console.log(b);

//confirm
// val = confirm = confirm('emin misiniz?')
// if(val){
//     console.log('ok');
// }else {
//     console.log('no');
// }


//scroll
// val = window.scrollX;
//val = window.scrollY;


//location
val = window.location;
val = window.location.href; // arama çubuğundaki adresi alır
val = window.location.hostname; // internet adresi
val = window.location.hostname; // port numarası ile birlikte internet adresi
val = window.location.protocol; // hangi protokolü kullandığını alırız.
val = window.location.search; // quary string bilgisini alırız

// window.location.href='http://google.com'; // sayfaya yönlendirme
// window.location.reload(); // sayfa sürekli refresh olur.


console.log(val);