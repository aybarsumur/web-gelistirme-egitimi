// Keyboard Events

const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('select');

//keydown : tuşa basma ile gerçekleşir
// input.addEventListener('keydown',eventHandler);

//keyup : tuştan parmağını kaldırman ile gerçekleşir
// input.addEventListener('keyup',eventHandler);

//keypress : tuşa basma ile gerçekleşir
// input.addEventListener('keypress',eventHandler);

//focus : input içinde mouse ile tıklayınca gerçekleşir
// input.addEventListener('focus',eventHandler);

//blur : input içinden mouse ile çıkınca gerçekleşir
// input.addEventListener('blur',eventHandler);

//cut : input içinden ctrl-x(cut) yapılınca gerçekleşir
// input.addEventListener('cut',eventHandler);

//paste : input içinden ctrl-v(paste) yapılınca gerçekleşir
// input.addEventListener('paste',eventHandler);

//select : input içinden yazdığımız bir yazının herhangi bir kısmı mouse ile seçildiği anda gerçekleşir
// input.addEventListener('select',eventHandler);

// submit : formdaki submit buttonuna tıkladığımız anda formdaki bilgi formun adresine gider. e.preventDefault() ile sayfa submit olur ancak refresh olmayacağı için bilgiler karşıya gönderilmez.
// form.addEventListener('submit',eventHandler);

// change : select içinden bir değer seçtiğimizde gerçekleşir
select.addEventListener('change', eventHandler);

function eventHandler(e) {
    console.log("event type: "+e.type); 
    // console.log("key code: "+e.keyCode); // basılan son tuşu verir
    console.log("value: "+e.target.value); // inputtaki değeri verir

    // e.target.style.backgroundColor = 'yellow'; // 
    // e.preventDefault(); //submit
}