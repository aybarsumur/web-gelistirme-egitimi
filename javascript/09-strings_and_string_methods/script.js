// Strings


const firstName = 'Aybars'; //tek tırnak
const lastName =  "Umur"; //çit tırnak
let hobbies = "sinema, spor, kitap, yazilim";
const age = 41;
let val;


// String concatenation

val = firstName +' '+ lastName;
val = firstName;
val += " Umur"

val = "Benim adım " + firstName + " " + lastName + " ve yaşım " + age + ' boston\'da yaşıyorum.';  



// String concat

val = firstName.concat(' ',lastName);


// String uppercase - lowercase

val = val.toUpperCase(); //AYBARS UMUR
val = val.toLowerCase(); //aybars umur

// val = val[7]; //u
// val = val.indexOf("u"); // 7 . olmayan bir değer için de -1 değeri gelir.


// string replace
// val = val.replace("aybars","Baybars");
val = "    "+val.replace("aybars","Baybars")+"       ";


// trim : başındaki ve sonundaki boşlukları temizler
val = val.trim(); 


// Substring

//val = val.substring(3,8); // ars u   3.indisten başlar 8.hariç yazdırır


// Slice

// val = val.slice(3,8); // ars u  substring ile aynı 3.indisten başlar 8.hariç yazdırır
//val = val.slice(4); // rs umur  4.indisten başlar sona kadar yazdırır


// String length

//val = val.length;



// Split

val = hobbies.split(","); // => dizi dondürür. ['sinema', ' spor', ' kitap', ' yazilim'] . Virgül olması şart değil herhangi bir ifade boş vs. kullanılabilir.
console.log(val[1]); // spor

console.log(val);
console.log(typeof val);
