// Tür Dönüşümü

//gelen değer her zaman istediğimiz veri türünde olmayabilir. bundan dolayı kontrol edip dönüşüm yapmak lazım
let num1 = "5"; //string
let num2 = "10"; //string
console.log(typeof num1)
console.log(num1+num2) //510

let num3 = Number("5"); //number
let num4 = Number("10"); //number
console.log(typeof num3)
console.log(num3+num4) //15


let val;

//number to string
val = String(10);

//boolean to string
val = String(true);

//date to string
val = String(new Date().getFullYear());

//array to string
val = String([1, 2, 3, 4]);

// toString()
val = (10).toString();
val = (false).toString;

//String to number
val = Number("10");
val = Number(true);
val = Number(false);
val = Number(null); //NaN
val = Number("a"); //NaN
val = Number([1, 2, 3, 4]); //NaN

//parseInt
val = parseInt("10"); //10 number
val = parseInt("10.5"); // 10
val = parseFloat("10.5"); //10.5


console.log(val)
console.log(typeof val) //String
console.log(val.length) //2 => length sadece string ifadeler için kullanılır
console.log(val.toFixed())//10
console.log(val.toFixed(3))//10.000

