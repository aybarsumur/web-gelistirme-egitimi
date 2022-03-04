// Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

//click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);


//double click : dblclick
// btn.addEventListener('dblclick',eventHandler);
// ul.addEventListener('dblclick',eventHandler);


//mousedown : mouse buttonuna tıkladığımız anda event gerçekleşir
//btn.addEventListener('mousedown',eventHandler);
//mouseup : mouse buttonundan parmağımızı çektiğimiz anda event gerçekleşir
// ul.addEventListener('mouseup',eventHandler);


//mouseenter : mouse ile bir alana girdiğin anda event gerçekleşir
// ul.addEventListener('mouseenter',eventHandler);
//mouseleave : mouse ile bir alandan çıktığın anda event gerçekleşir
// btn.addEventListener('mouseleave',eventHandler);


//mouseover : mouse ile bir alana girdiğin anda event gerçekleşir(bunların enter ve leave den farkı alt elemanların üstüne gelince veya ayrılınca da çalışırlar)
// ul.addEventListener('mouseover',eventHandler);
//mouseout : mouse ile bir alandan çıktığın anda event gerçekleşir(bunların enter ve leave den farkı alt elemanların üstüne gelince veya ayrılınca da çalışırlar)
// ul.addEventListener('mouseout',eventHandler);


//mousemove : mouse ile bir alana girdiğin anda her hareket ettiği anda sürekli event gerçekleşir. Bunun avantajı koordinat almada olur.
const h5 = document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);



function eventHandler(event) {
    console.log(`event type: ${event.type}`);
    h5.textContent = `Mouse X: ${event.offsetX}, Mouse Y: ${event.offsetY}`;
}