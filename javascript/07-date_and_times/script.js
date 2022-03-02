// Date & Times

// Şimdiki tarihin gün ay yıl bilgisi:
let dt = new Date(); // d => Date objesi
console.log("Şimdiki tarih : "+dt);

console.log("Şimdiki tarih gün: "+dt.getDate());
console.log("Şimdiki tarih ay : "+ (dt.getMonth()+1));
console.log("Şimdiki tarih yıl : "+dt.getFullYear());


//Tarih ve saat bilgisi içeren bir date objesi oluştur

let dtA = new Date("2020,8,24 14:50:10"); // üç metod da olur
let dtB = new Date(2020,7,24,14,50,10); // üç metod da olur
let dtC = new Date("8/24/2020 14:50:10"); // üç metod da olur

console.log(dtA);
console.log(dtB);
console.log(dtC)


// 01/01/1990 tarihinden bir gün öncesini göster
let dtD = new Date("1/1/1990");
let dayOfMouth = dtD.getDate();
dtD.setDate(dayOfMouth-1);
console.log(dtD) // 31/12/1989


// iki tarih arasında geçen zamanı bul

var start = new Date("1/1/1990");
var end = new Date("2/10/1992");

var milisecond = end - start;
var saniye = milisecond/1000;
var dakika = saniye/60;
var saat = dakika/60;
var gün = saat/24;


console.log("milisecond : " + milisecond);
console.log("saniye : " + saniye);
console.log("dakika : " + dakika);
console.log("saat : " + saat);
console.log("gün : " + gün);


// Yaş hesaplama nasıl yapılır ?

let birthday = new Date("4/20/1981");

console.log(birthday.getTime()); // 1/1/1970-1/8/1985 arasında geçen süre (milisaniye olarak)
console.log(Date.now()); //1/1/1970-bugün arasınde geçen süre ( milisaniye olarak)

let ageDifMs = Date.now()-birthday.getTime(); //yaş - milisaniye olarak
console.log(ageDifMs);

// date objesine milisaniye veriyoruz tarih objesi alıyoruz
let ageDate = new Date(ageDifMs).getFullYear()-1970; //1.methot
console.log(new Date(ageDifMs))
console.log(ageDate);

let ageDate1 = ageDifMs/1000/60/60/24/365 //2.methot
console.log(ageDate1);


// Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır.

// annelerGunu.setHours(0, 0, 0, 0); // saat bilgisiyle işimiz olmadığından milisaniyeye kadar sıfırladık
// annelerGunu.setFullYear(2019); 
// annelerGunu.setDate(1);
// annelerGunu.setMonth(4); // mayıs ayı
let annelerGunu = new Date("05/01/2019 0:0:0:0");

console.log(annelerGunu.getDay()); //1/5/2019 hangi güne gelmiş? 3 - çarşamba

//bizim isteğimiz pazar günü yani 0. indis. Ondan dolayı; aşağıda diyoruz ki;
// annelergünü gün indisi 0 değil ise;
while(annelerGunu.getDay() != 0) { 
    annelerGunu.setDate(annelerGunu.getDate()+1) //güne 1 ekle, indis 0 olana kadar.
}
// annelerGunu.setDate(annelerGunu.getDate());
console.log("ilk pazar : " +annelerGunu);

annelerGunu.setDate(annelerGunu.getDate()+7) // ikinci pazar için 7 gün ekliyorum
console.log("ikinci pazar : " +annelerGunu);
