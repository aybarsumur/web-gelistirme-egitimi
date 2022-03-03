// Functions

function yasHesapla(dogumYili){
    return 2022 - dogumYili;
}

let ageA = yasHesapla(1970);
let ageB = yasHesapla(1960);
let ageC = yasHesapla(1980);

console.log(ageA);
console.log(ageB);
console.log(ageC);

function emekliligeKacYilKaldi(dogunYili, isim){
    let yas = yasHesapla(dogunYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
    } else {
        console.log(`${isim} başkan zaten emekli olmuşsun!!!`);
    }
}

emekliligeKacYilKaldi(1950,'John Doe');
emekliligeKacYilKaldi(1980,'Jane Doe');