let models = [
    {
        name:'Bmw 418d',
        image:'http://www.arabalar.com.tr/static-res/image/versiyon/660x495/bmw/4-serisi/sedan/2018/bmw-4-serisi-sedan-2018-04.jpg',
        link:'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name:'Mazda CX-3',
        image:'img/mazda.jpg',
        link:'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name:'Volvo S60',
        image:'img/volvo.jpg',
        link:'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name:'Skoda SuperB',
        image:'img/skoda.jpg',
        link:'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name:'Honda Civic',
        image:'img/honda.jpg',
        link:'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];


let index = 0;
let slaytCount = models.length;
let interval;

let settings = {
    duration:'2000',
    random:false //true dersek random çalışır.
};

init(settings);

document.querySelector('.fa-circle-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-circle-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});

//mouse ile okların üzerine gelince setInterval ın clear olması
document.querySelectorAll('.fa-solid').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    });
});

//mouse ile okların üzerinden ayrılınca setIntervalın tekrar devreye girmesi
document.querySelectorAll('.fa-solid').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });
});

function init(setting) {

    //setTimeout : //belli bir süre sonra başlatılacak fonksiyonu söylüyorsun. bir sefer işletiyor ve duruyor
    //setInterval : //belli bir süre sonra başlatılacak fonksiyonu söylüyorsun. clearInterval ile durdurmadığın sürece devam eder.

    let prev;

    interval = setInterval(function(){

        if(setting.random) { // eğer true ise
            do{ //aynı sayının üretilmesi ihtimaline karşı;
                //random index
                index = Math.floor(Math.random()*slaytCount);//slaytCount kadar olacak. Floor olunca böylelikle hep aşağı yuvarlama yapacağı için de 5 gelmez.
            }while(index == prev); // eğer index ile prev eşit ise tekrar çalıştır.
            prev = index;
        }else {
            //artan index
            if (slaytCount == index+1) {
                index = -1;
            }
            showSlide(index);
            console.log("index : "+index);
            index++;
        }
        
        //console.log("random index : "+index);
        showSlide(index);

    },setting.duration);
};

function showSlide(i) {
    //index = i;
    if (i<0) {
        index = slaytCount - 1;// son slayta gitmek istediğim için -1
    };

    if (i>=slaytCount) {
        index = 0;
    };
    
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
};
