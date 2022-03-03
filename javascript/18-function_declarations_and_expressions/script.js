// Function Declarations & Expressions

//function declarations
function sum(a,b) {
    let c = a+b;
    return c;
}

console.log(sum(10,20));


//function expressions
const sum2 = function(a,b){ 
    var c = a+b; 
    return c;
}

console.log(sum2(10,20)); //30
console.log(sum2(10)); //NaN
console.log(sum2(10,20,40)); //30



const sum3 = function(a,b){ 
    if(typeof a==='undefined'){a=0}
    if(typeof b==='undefined'){b=0}

    var c = a+b; 
    return c;
}

console.log(sum3(10,20)); //30
console.log(sum3(10)); //10



//ES6 default parameters
const sum4 = function(a=0,b=0){ 
    var c = a+b; 
    return c;
}

console.log(sum4(10,20)); //30
console.log(sum4(10)); //10


// function args(){
//     console.log(arguments);
// }
// args(10,20,30);


function sumAll(){
    let total = 0;

    for(let i=0; i<arguments.length; i++) {
        total+=arguments[i];
    }
    console.log('Kaç arguman gönderildi : '+arguments.length);
    return total;
}

console.log('toplam: '+sumAll(10, 50, 12, 40, 1, 35, 11)); //148
