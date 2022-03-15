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

showSlide(index);

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
