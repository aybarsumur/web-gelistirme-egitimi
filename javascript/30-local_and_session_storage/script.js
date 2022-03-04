// Local And Session Storage

// // LOCAL STORAGE : Url ile ilişkilendirilmiş verileri tarayıcı kapansa bile kaplar

let val;

// set item : değer atama => key,value
const firstName = localStorage.setItem('firstName','Aybars');
const lastName = localStorage.setItem('lastName','Umur');


// get item : hafızadan veriyi çağırma
val = localStorage.getItem('firstName');
val = localStorage.getItem('lastName');


// remove item : hafızadan veriyi silme
// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');


// clear : tüm elemanları hafızadan silme
// localStorage.clear();


// set array to storage : dizi ekleme (JSON.stringify)
let hobbies = ['sinema', 'araba', 'yazılım'];

localStorage.setItem('hobbies', JSON.stringify(hobbies));


// get array from storag : diziyi çağırma (JSON.parse)
val = JSON.parse(localStorage.getItem('hobbies'));


console.log(val);
console.log(localStorage);




// // SESSION STORAGE : Url ile ilişkilendirilmiş verileri tarayıcı kapanınca siler

// const city = sessionStorage.setItem('city','Boston');
// const country = sessionStorage.setItem('country','USA');

// console.log(sessionStorage);