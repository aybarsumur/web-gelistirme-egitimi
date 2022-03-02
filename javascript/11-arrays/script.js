// Arrays []

let names = ['aybars', 'sena', 'ali', 'veli'];
let years = [2017, 1999, 2012, 2010, 1997, 1980, 1830];
let mix = ['baybars', 'umur', 1983, null, undefined, ['sinema', 'kitap']];

// get array item : çağırma
console.log(names[0]);
console.log(names[3]);


// set array item : düzelte
names[1]='pakize';
names[4]='şukufe'; // bunu 4 yerine 5 yazsaydık 4 e boş bir eleman yapacaktı. Bu hataların önüne geçmek için aşağıdaki metod daha doğru. O yüzden seti eklemek maksatlı değil değiştirmek maksatlı kullanmak daha doğru.
names[names.length]='abuzer'; // dizi elemanlarını saymaya gerek kalmada


// add item : eleman ekleme
years.push(2000); // sona eleman ekleme
years.unshift(2048); // başa eleman ekleme


// remove item : eleman silme
years.pop(); // dizinin son elemanı silinir
years.shift(); // en baştaki eleman silinir


// indexof : kaçıncı indexde
let index =names.indexOf('ali');
console.log("index : "+index); // 2. indexde

let index2 =names.indexOf('alii');
console.log("index2 : "+index2); // -1 : böyle eleman yok


// reverse: diziyi tersten yazar
names.reverse();


// sort : sıralama
years.sort(); // küçükten büyüğe veya alfabetik a...z


// concat : birleştirme
let val = years.concat(names);
console.log(val); //[1999, 2010, 2012, 2017, 'abuzer', 'şukufe', 'veli', 'ali', 'pakize', 'aybars']


// splice : biryerden başla ve diziyi parçala veya ekle
let newNames = ['baybars', 'şaziye', 'john', 'merry', 'fatma', 'murtaza', 'keriman'];
newNames.splice(2, 2); // 2. indisten başla 2 taneyi kopart
newNames.splice(3,0,'sondan2'); // herhangi bir eleman silmeden 3. indisten sonra sondan2 yi ekler
newNames.splice(2,1,"sondan3"); // 2.indisten başla 1 eleman sil. oraya sondan3 ekle 
console.log("newNames : "+ newNames);




//aşağıdaki fonksiyon find ve filter için kullanılıyor
function over18(year) {
    let age = 2018 - year;
    return age>=18;
}
// console.log("over18 : "+over18(2020));


// find : bulduğu ilk değeri getirir
let a = years.find(over18);
console.log("over18 : "+a); //1999

// filter : bulduğu değerleri küçüten büyüğe sıralayarak bir dizi olarak getirir.
let b = years.filter(over18);
console.log(b); // [1830, 1980, 1997, 1999]



console.log(names);
console.log(names.length);
console.log(typeof names); //object

console.log(years)
console.log(mix)