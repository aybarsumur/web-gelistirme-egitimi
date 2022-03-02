// Date Object

let d = new Date(); // d => Date objesi
let birthday = new Date(1990,1,5); // birthday date

console.log("Değiştirmeden önceki Bugün : "+d);
console.log("Birthday : "+birthday);

// Set Methods
console.log("*****Set Methods*****");

//01/03/2020 10:14
d.setFullYear(2020);
d.setMonth(3);
d.setDate(10);
d.setHours(10);
d.setMinutes(14);

// Get Methods 
console.log("*****Get Methods*****");


console.log(d.getDate()); // 1-31 arası bugün
console.log(d.getDay()); // 0-6 arası haftanın gün indisi. 0-pazar...6-cumartesi
console.log(d.getFullYear()); // yıl bilgisi
console.log(d.getMonth()); // 0-11 arası aylar. 0-ocak 11-aralık
console.log(d.getHours()); // saat 12 gibi
console.log(d.getMinutes()); // 0-59 arası
console.log(d.getSeconds()); // saniye bilgisi


console.log(d.getFullYear()-birthday.getFullYear()); //30
console.log(d.getMonth()-birthday.getMonth()); //2
console.log(d.getDate()-birthday.getDate()); //5


console.log("Değiştirme sonrası Bugün : "+d);
console.log(typeof d); // object: Bu da demek oluyor ki bana birçok farkli bilgiler sunuyordur


