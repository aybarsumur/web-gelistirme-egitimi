// Uygulama Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business.  ";

var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ilerı seviye";

// cümle kaç karakterlidir?
console.log(sentence.length); //108

// Cümlenin başındaki ve sonundaki boşlukları silin.
var newSentence = sentence.trim();
console.log(newSentence);

// kaç kelimeden oluşuyor?
let array = newSentence.split(" ");
console.log(array.length);  // 15

// tüm cümleyi küçük harfe çevir
let lowerSentence = newSentence.toLowerCase();
console.log(lowerSentence);

// "-" karakterlerini silin
let newLowerSentence = lowerSentence.replace("-","");
console.log(newLowerSentence);

// url'nin içinden str kısmını çıkar
var str = "http://";
//let url1 = url.replace(str,""); //1.alternatif
let url1= url.substring(str.length) //2.alternatif
console.log(url1);

// url hangi protokolü kullanmaktadır?
console.log(url.startsWith("http")); //true

// url, ".com" ifadesini içeriyor mu?
// let stringIndex = url1.indexOf(".com"); //1.alternatif 10 yani içeriyor demek
let stringIndex = url1.includes(".com"); //2.alternatif true

console.log(stringIndex) // yukarıda açıklama yanında

// url string ifadesini geçerli bir url olarak düzenleyiniz.
let url2 = url1.replace(/ /g,'-')
            .toLowerCase()
            .replace(/ı/g,'i'); //tüm ı ları i ye çevir
console.log(url2);
