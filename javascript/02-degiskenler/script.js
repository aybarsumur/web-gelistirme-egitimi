// Değişkenler

let age;
console.log(age); //undefined
age=20;
console.log(age); //20

let fullname="Aybars Umur";
console.log(fullname);


fullname="Baybars Umur";
console.log(fullname);

// Değişken Tanımlama Kuralları


// Sayısal ifade ile başlayamaz

//let 1yas;// kullanılamaz
var yas1;
var _yas1;
var $yas2;


// Komut isimleriyle tanımlama yapılamaz.

//let for;
//let switch;

// Birden fazla kelime içerme

let ad="Aybars";
let soyad="Umur";

let ad_soyad="Aybars Umur";
let adSoyad="Baybars Umur";

// case sensitive ( büyük küçük duyarlılığı )
let firstName="Aybars"
var FirstName="Umur"

console.log(firstName);
console.log(FirstName);


// var, let, const

// var ile let arasında scope farklılığı var

const email="abc@gmail.com" //const=> sabit
console.log(email); 

//email="bcd@gmail.com" // hata verir. Değişmesini istemediğin değerleri const ile ata
//console.log(email); 

