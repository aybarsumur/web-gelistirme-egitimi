// Uygulama : Conditional Statements

/*
1.soru
20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir.
Bu bilgilere göre servis uyarısı veriniz.
1.Bakım: 1 yıl
2.Bakım: 2 yıl
3.Bakım: 3 yıl
*/
/*
let trafigeCikis = new Date('04/20/2019 0:0:0:0');
let trafiktekiMs = Date.now() - trafigeCikis.getTime();
let trafiktekiGun = Math.floor(trafiktekiMs/(1000*60*60*24));

if(trafiktekiGun<=365) {
    console.log("1.servis bakım süreniz geldi");
}else if(trafiktekiGun>365 && trafiktekiGun<=365*2) {
    console.log("2.servis bakım süreniz geldi");
}else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3) {
    console.log("3.servis bakım süreniz geldi");
}else{
    console.log("Bilinmeyen bir süre");
}
console.log("trafikteki gün: "+trafiktekiGun);
*/


// 2. soru

let result = prompt("who's there?");

if(result == 'cancel') {
    console.log("cancelled");
}else if(result == 'Admin') {
    console.log("Welcome Admin ");

    var password = prompt('enter your password : ');

    if(password == 'cancel'){
        console.log('canceled')
    }else if(password == '1234'){
        console.log('Başkan ne yapıyorsun :)')
    }else {
        console.log('laaaa bırahhhh!')
    }
}else  {
    console.log("I dont know you!");
}
console.log(result);