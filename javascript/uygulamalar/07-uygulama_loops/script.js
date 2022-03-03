// Uygulama : Loops

/*
Demo Loops: Sayı Tahmin Oyunu

1-10 arası rastgele üretilen bir sayıyı aşağı yukarı ifadeler ile bulmaya çalışın.
** puanlama yapın
** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

let hak;
let tahmin, sayac=0, can;
let sayi = Math.floor(Math.random()*10+1) //1-10 arası rasgele sayı. 0 gelmesini istemiyorum
can = Number(prompt("Kaç defada bileceksiniz?"));
hak = can;
console.log(sayi);

while(hak>0) {
    hak--;
    sayac++;
    tahmin = Number(prompt('Bir sayı giriniz')); // sayısal değere çevirdim

    if(sayi == tahmin) {
        console.log(`Tebrikler ${sayac} seferde bildiniz`);
        console.log(`Puanınız:  ${100-((100/can)*(sayac-1))}`);
        break;
    }else if(sayi>tahmin) {
        console.log('Yukarı');
    }else {
        console.log('Aşağı');
    }
    if(hak==0){
        console.log(`Üzgünüm, hakkınız bitti. Sayı : ${sayi}.`);
    }
};