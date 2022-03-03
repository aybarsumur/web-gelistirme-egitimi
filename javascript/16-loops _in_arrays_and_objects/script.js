// Loops in arrays and objects

///ARRAYS

let cars = ['Bmw', 'Mercedes', 'Toyota'];

for(let i=0; i<cars.length; i++) {
    console.log(cars[i]);
}

// for-in

for (let i in cars) {
    console.log(`index : ${i} value : ${cars[i]}`);
}


// foreach

cars.forEach(function(item){
    console.log(item);
})



///OBJECTS

let people = [
    {firstName: 'Aybars', lastName: 'Umur'},
    {firstName: 'Veli', lastName: 'Gül'},
    {firstName: 'Ali', lastName: 'Demir'}
];

for (let i=0; i<people.length; i++) {
    console.log(people[i].firstName);
};

for (let i in people) {
    console.log(`index : ${i} value : ${people[i].lastName}`);
};

people.forEach(function(item){
    console.log(item.firstName);
});



//MAP : geriye dizi döndermek istediğimizde kullanıyoruz. returns an array


let val = people.map(function(item){
    return item.firstName + ' ' + item.lastName;
});

console.log(val); //['Aybars Umur', 'Veli Gül', 'Ali Demir']




let numbers = [1, 5, 6, 8, 10];

let num = numbers.map(function(n){
    return n*n;
})

console.log(num); //[1, 25, 36, 64, 100]