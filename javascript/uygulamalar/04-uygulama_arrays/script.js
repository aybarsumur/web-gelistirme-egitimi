// Uygulama : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip dizi oluştur
let cars = ['Bmw', 'Mercedes', 'Opel', 'Mazda'];

// Dizi kaç elemanlı
console.log("eleman sayısı: "+cars.length);

// Dizinin ilk ve son elemanı:
console.log("dizinin ilk elemanı: "+cars[0]);
console.log("dizinin son elemanı: "+cars[cars.length-1]);

// "Renault" u dizinin sonuna ekle
// cars.[cars.length] = "Renault";
cars.push("Renault");

// "Toyota" yı dizinin başına ekle
cars.unshift("Toyota");

// "Renault" değerini sil
//burada pop da kullanılır. ama renaultun nerede olduğunu bilmiyorsak
cars.splice(cars.indexOf("Renault"),1)

// "Toyota" değerini sil
cars.shift();

// Diziyi tersine çevir
cars.reverse();

// Dizi elemanlarını alfabetik olarak sırala
cars.sort();

// [1,2,5,80,15] dizisini sıralayın
let newArray = [1, 2, 5, 80, 15];
console.log(newArray.sort()); // alfabetik sıralar

function compare(a,b) {
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}
console.log(newArray.sort(compare)); // artık sayısal olarak sıralar

// Opel dizinin bir elemanı mıdır
// console.log(cars.indexOf("Opel"));//3. indisindedir.
console.log(cars.includes("Opel"));//true

// var str = "Chevrolet,Dacia"; ifadesini diziye çevir.
var str = "Chevrolet,Dacia";
let newCars = str.split(",");
console.log(newCars);

// oluşturulan diziyi başka bir dizi ile birleştir
let bigCars = cars.concat(newCars)
console.log(bigCars);

// oluşturulan dizinin son 2 elemanını silin
// let new2 = bigCars.splice(bigCars.length-2,2)
// let new2 = bigCars.splice(-2)
console.log(bigCars)

/* Aşağıda verilen elemanları bir dizi içerisinde saklayın
studentA : Yiğit Bilgi 2010
studentB : Sena Turan 1999
studentC : Ahmet Turan 1998
*/

let studentA = ['Yiğit', 'Bilgi', '2010'];
let studentB = ['Sena', 'Turan', '1999'];
let studentC = ['Ahmet', 'Turan', '1998'];

let students = [studentA, studentB, studentC];
console.log(students[0][1]); // Bilgi

console.log(cars);