// Numbers

let val;

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

val = Math.PI; //pi sayısı => 3.14159265....
val = Math.round(2.4); // 2 en yakına yuvarlama
val = Math.round(2.7); // 3 en yakına yuvarlama
val = Math.ceil(2.4); // 3 herzaman yukarı yuvarlar
val = Math.floor(2.7); // 2 herzaman aşağı yuvarlar
val = Math.sqrt(64); // 8 kare kök alma
val = Math.pow(3,4); // 81 3 üzeri 4 (3ün 4.kuvveti)
val = Math.abs(-100); // 100 mutlak değer
val = Math.min(111, 215, 32, 100, 22); // 22 dizideki en küçük sayıyı verir
val = Math.max(111, 215, 32, 100, 22); // 215 dizideki en büyük sayıyı verir
val = Math.random(); // 0-1 arası rastgele sayı üretir.
val = Math.floor(Math.random()*10); // 0-9 arası tam sayı dönderir
val = Math.floor(Math.random()*10+1); // 1-10 arası tam sayı dönderir


console.log(val);
console.log(typeof val);
