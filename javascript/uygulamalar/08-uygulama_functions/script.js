// Uygulama : Functions

let hesapA = {
    ad: 'Aybars Umur',
    hesapNo: '12312456',
    bakiye: 2000,
    ekHesap: 1000
};

let hesapB = {
    ad: 'John Doe',
    hesapNo: '12334456',
    bakiye: 3000,
    ekHesap: 2000
};

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    console.log(`hesap bakiyesi : ${hesap.bakiye} , ekhesap bakiyesi : ${hesap.ekHesap}`);

    if(hesap.bakiye>=miktar){
        hesap.bakiye -= miktar;
        console.log("Paranızı alabilirsiniz");
    } else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if(toplam>=miktar){
            if(confirm('Ek hesabınızı kullanmak ister misiniz?')){
                console.log('Paranızı alabilirsiniz');
                var bakiye = hesap.bakiye;
                var ekHesapdanAlınacak = miktar-bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap-=ekHesapdanAlınacak;
                console.log(`hesap bakiyesi : ${hesap.bakiye} , ekhesap bakiyesi : ${hesap.ekHesap}`)
            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır`)
            }
        } else {
            console.log(`Üzgünüz ${hesap.hesapNo} nolu hesabınız ${miktar-hesap.bakiye-hesap.ekHesap}TL eksik.`)
        }
    }
}

paraCek(hesapA,1800);
paraCek(hesapA,200);
paraCek(hesapA,600);
paraCek(hesapA,450);
