// Değişken Tipleri

// 1-Primitive Types

// String
let firstName = "Aybars"
console.log(typeof firstName)  //string

// Number
let age = 20;
let money = 100.5;
console.log(typeof age);  //Number
console.log(typeof money);  //Number

// Boolean
let isActive = true;
console.log(typeof isActive);  //Boolean

// null
let job = null; //herhangi bir değer atanmadı anlamında
console.log(typeof job);  //object : araştırma yapınca bunun bir bug olduğu görülüyor.

// undefined
let car;
console.log(typeof car);  //undefined



// 2-Reference Types - Objects

// Array
let names = ['Aybars','Baybars','Ali'];
console.log(typeof names);  //Object

// Object
let address = {
    city:"Ankara",
    country:"Turkey"
};
console.log(typeof address);  //Object

// Function
var calculateAge = function() {
    return 0;
}; 
console.log(typeof calculateAge);  //function
