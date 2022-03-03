// Scopes


// Global Scope
var nameA = 'Aybars';
var age = 25;

function logName() {
    let nameA = 'Ali';
    let age = "12";
    console.log('function scope : '+nameA, age);
}

// console.log(age); //not defined

if(true){
    var age = 30;
    console.log('block scope : '+nameA, age);
}

console.log(age);

logName();
console.log(nameA);




// Local Scope


// Fonksiyonlar kendi scopelarını oluşturur.
// block'lar yeni scope oluşturmaz.
// ES ile gelen let ve const block scope oluşturur. Yani var ile oluşturulan değişkene dışarıdan ulaşabilirsin ama let ve const a ulaşamazsın.


console.log("********************************");

if(true){
    var model = 'Opel';
    let year = 2016;
    const color = 'white'
    console.log('block scope : ',model,year,color);
}

console.log(model);
//console.log('block scope : ',model,year,color); //var ile oluşturulan değişkene dışarıdan ulaşabilirsin ama let ve const a ulaşamazsın.

var i = 1;
for (var i=0; i<10; i++) {
    console.log('i ',i)
}
console.log(i); //10

let a = 1;
for (let a=0; a<10; a++) {
    console.log('a ',a)
}
console.log(a); //1