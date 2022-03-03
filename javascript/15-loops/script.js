// Loops

// for loop
console.log('****FOR LOOP****');


for(let i=0; i<10; i++) {
    
    if(i==3) {
        console.log('en sevdiğim rakam : '+i)
        continue; // continue demekteki gaye artık buradan itibaren tekrardan for döngüsüne dönüp i++ yapıp yeni bir işleme başlamasını sağlamak. Yani, continue yazmazsam en sevdiğim rakam 3 dediktan sonra altın tekrarsan aşağıdaki consol logdan dolayı 3 yazar
    };

    if(i==6){
        console.log('en sevmediğim rakam : '+i)
        break; // break ile continue den farklı olarak artık kodlar işletilmeyi bırakır. ve işlem durur.
    }
    
    console.log(i);
}


// while loop
console.log('****WHILE LOOP****');


let i=0;
while(i<10) {
    console.log(i);
    i++
};



// do -while loop
console.log('****DO-WHILE LOOP****');


let a=0;
do{
    console.log(a);
    a++
}while(a<10)



// örnek
console.log('****ÖRNEK****');


// toplama
let toplam=0;
for(let b=10; b>0; b--) {
    toplam+=b;
}
console.log("toplam : "+toplam);


// çarpım
let sonuc=1;
for(let c=10; c>0; c--) {
    sonuc*=c;
}
console.log("sonuc : "+sonuc);


// sadece çift/tek sayıların çarpımı
let sonuc2=1;
let sonuc3=1;
for(let d=10; d>0; d--) {
    // çift sayı kontorlü
    if(d%2==0){
        sonuc2*=d;
    }
    // tek sayı kontrolü
    if(d%2==1){
        sonuc3*=d;
    }
}
console.log("sonuc2 : "+sonuc2);
console.log("sonuc3 : "+sonuc3);


// iç içe for döngüsü

for(let i=0; i<10; i++) {
    for(let j=0; j<5; j++) {
        console.log(`i: ${i} j: ${j}`);
    }
}


let val = '\n';
for(let i=0; i<8; i++) {
    for(let j=0; j<8; j++) {
        val += '* ';
    }
    val+='\n';
}
console.log(val);
