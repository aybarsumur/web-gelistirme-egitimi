// Numbers

// let val;

// val = Number('10'); //10 number
// val = parseInt('10'); //10 number
// val = parseFloat('10.5'); //10.5 number
// val = parseInt('10a'); // 10 number (sondaki sayıya döndüremeyeceği yeri atar)
// val = parseInt('a10a'); // NaN number ( sayıya çevrilemeyecek bir değer)

// NaN Kontrolü
// val = isNaN('10'); //false
// val = isNaN('a10'); //true

// let num = 10.12456789;
// val = num.toPrecision(5); // 10.125 => ilk beş basamağı sondakini yuvarlayıp getirir.
// val = num.toFixed(5); // 10.12457 => yirgülden sonraki beş basamağı sondakini yuvarlayıp getirir.

// val = Math.PI; //pi sayısı => 3.14159265....
// val = Math.round(2.4); // 2 en yakına yuvarlama
// val = Math.round(2.7); // 3 en yakına yuvarlama
// val = Math.ceil(2.4); // 3 herzaman yukarı yuvarlar
// val = Math.floor(2.7); // 2 herzaman aşağı yuvarlar
// val = Math.sqrt(64); // 8 kare kök alma
// val = Math.pow(3,4); // 81 3 üzeri 4 (3ün 4.kuvveti)
// val = Math.abs(-100); // 100 mutlak değer
// val = Math.min(111, 215, 32, 100, 22); // 22 dizideki en küçük sayıyı verir
// val = Math.max(111, 215, 32, 100, 22); // 215 dizideki en büyük sayıyı verir
// val = Math.random(); // 0-1 arası rastgele sayı üretir.
// val = Math.floor(Math.random()*10); // 0-9 arası tam sayı dönderir
// val = Math.floor(Math.random()*10+1); // 1-10 arası tam sayı dönderir


// console.log(val);
// console.log(typeof val);

// Uygulama

let num = 15.123456789;

let val;

// toplamda 3 basamaklı sayı kullan
val = num.toPrecision(3); //15.1

// ondalık kısmı 3 basamakta sınırla
val = num.toFixed(3); //15.123

// en yakın sayıya yuvarla
val = Math.round(num); //15

// aşağı yuvarla
val = Math.floor(num); //15

// yukarı yuvarla
val = Math.ceil(num); //16

// 1,2,10,56,20 sayılarından en küçük ve en büyüğü bul
val = Math.min(1, 2, 10, 56, 20); // 1 en küçük
val = Math.max(1, 2, 10, 56, 20); // 56 en büyük

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin
var min = 50;
var max = 150;

// val = Math.random()*max; // 0-150 arası sayı gelir
// val = Math.round(Math.random()*max); // 0-150 arası tam sayı gelir
// val = Math.round(min+Math.random()*max); // 50-200 arası tam sayı gelir
val = Math.round(min+Math.random()*(max-min)); // 50-150 arası tam sayı gelir

console.log(val)

/*
Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
** Brüt maaş    : 3700₺/ay
** Brüt mesai   : 10.3₺/saat
1-Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?
2-Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?
*/
//1-
let brutMaas = 3700;
let mesaiUcreti = 10.3;

let ToplamBrutMaas = brutMaas+mesaiUcreti*42
console.log(ToplamBrutMaas.toFixed(2)+"₺")

//2-
let netMaas = (ToplamBrutMaas*.75).toFixed(2)
console.log(netMaas+"₺")
