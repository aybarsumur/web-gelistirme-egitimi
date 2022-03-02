// Operatörler

let val;
const a=10;
const b=5;
const c="5";
let d=3;


// 1-Aritmetik Operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b; //çift tek konutrolünde kullanıyoruz
val = d++; // 3
val = ++d; // 5
val = d--; // 5
val = --d; // 3


// 2-Atama Operatörler

val = a; // 10
val += a; // 20 val = val + a;
val -= a; // 10 val = val - a;
val *= a; // 100 val = val * a;
val /= a; // 10 val =val / a;
val %= a; // 0 val = val % a;


// 3-Karşılaştırma Operatörler

val = a==b; // false - boolean
val = c==b; // true // sadece değer kontrolü yapılıyor
val = c===b; // false // hem değer hemde tip kontrolü yapılıyor. biri string diğeri number
val = a===b; // false // tipleri aynı ama değerleri farkı
val = a!=b; // true
val = a!==b; // true
val = a>b; //true
val = b>a; // false
val = a>=b; //false 


// 4-Mantıksal Operatörler

    // && (And)
    //true&&true    => true
    //true&&false   => false
    //false&&false  => false

val = (a>b) && (a>c) //true

    // || (Or)
    //true&&true    => true
    //true&&false   => true
    //false&&false  => false

val = (a>b) || (a>c) //true
val = (a>b) || (a<c) //true

    // ! (Not)
    //!false    => true
    //!true     => false

val = !(a>b) //false


console.log(val);
console.log(typeof val);


// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

IndexAda = kgAda/(heightAda*heightAda)
console.log(IndexAda)
console.log(IndexAda.toFixed()); // en yakın tam sayıya yuvarlar 17.7777 => 18

IndexCan = kgCan/(heightCan*heightCan)
console.log(IndexCan)
console.log(IndexCan.toFixed(3)); // 20.761  => 21

let adaHigherIndex = IndexAda>IndexCan; //false
let canHigherIndex = IndexCan>IndexAda; //true

console.log(adaHigherIndex)
console.log(canHigherIndex)

let AdaZayif = (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaKilolu = (IndexAda>=25) && (IndexAda<=29.9);
let AdaSisman = (IndexAda>=30) && (IndexAda<=34.9);
console.log("Ada zayıf: " + AdaZayif);
console.log("Ada'nın kilosu normal': " + AdaNormal);
console.log("Ada kilolu mu : " + AdaKilolu);
console.log("Ada şişman mı : " + AdaSisman);

let CanZayif = (IndexCan>=0) && (IndexCan<=18.4);
let CanNormal = (IndexCan>=18.5) && (IndexCan<=24.9);
let CanKilolu = (IndexCan>=25) && (IndexCan<=29.9);
let CanSisman = (IndexCan>=30) && (IndexCan<=34.9);
console.log("Can zayıf: " + CanZayif);
console.log("Can'nın kilosu normal': " + CanNormal);
console.log("Can kilolu mu : " + CanKilolu);
console.log("Can şişman mı : " + CanSisman);

