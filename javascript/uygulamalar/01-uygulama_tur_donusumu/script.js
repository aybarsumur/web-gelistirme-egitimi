// ** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.

// * Müşteri adı
// * Müşteri soyadı
// * Müşteri tc kimlik
// * Müşteri sipariş toplamı
// * Müşteri cinsiyet
// * Müşteri adres bilgisi
// * Müşteri hobileri

var customerName = "Aybars";
var customerLastName = "Umur";

var fullName = "Aybars Umur"

var musteriId = "123456789"; //herhangi bir hesaplama işlemine girmeyeceği için string saklıyorum

var total = 205.6;
var gender = "erkek";
//var gender = true; // kadın şeklinde de kullanılabilir. o zaman false da erkek olur. Böylelikle veri tabanında daha az yer kaplar

//object
var address = {
    city: "Eskişehir",
    district: "Tepebaşı",
    body: "Kızılcıklı Mp. Cad. No: 4"
};

//array
var hobbies = ["Sinema","Kitap","Spor"];


// ** Aşağıdaki siparişlerin toplamını yapın

var order1 = "100";
var order2 = "150";

var totalOrder = Number(order1) + Number(order2)
console.log(totalOrder);


// ** Aşağıdaki siparislerin toplamını hesaplayınız

var order3 = "100.2";
var order4 = "150.5";

var totalOrder2 = parseFloat(order3)+parseFloat(order4) // bu number ile de yapılabilirdi
console.log(totalOrder2);


// ** Aşağıdaki siparislerin toplamını tam sayı olarak hesaplayınız

var order5 = "100.2";
var order6 = "150.5";

var totalOrder3 = parseInt(order5)+parseInt(order6)
console.log(totalOrder3);


// ** Aşağıdaki verilen doğum yıllarınıa göre yaş hesaplayınız

const yearOfBirth = 1981;

var age = new Date().getFullYear()-yearOfBirth
console.log(age);


// ** Aşağıdaki string ifadenin karakter sayısını bulunuz.

var course = "Modern Javascript Kursu";
var length0fString = course.length
console.log(length0fString);