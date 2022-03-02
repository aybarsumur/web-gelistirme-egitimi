// Object Literals

let val;

let person = {
    firstName : 'Aybars',
    lastName : 'Umur',
    age : 30,
    hobbies : ['music', 'game'],
    address : {
        city : 'Boston',
        country : 'Usa'
    },
    getBirthYear : function(){
        let currentYear = new Date().getFullYear();
        return currentYear-this.age
    }
};

val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.getBirthYear();

console.log(val);
console.log(typeof val);


let people = [
    {firstName: 'Baybars', lastName: 'Umur'},
    {firstName: 'Ali', lastName: 'Zeyin'},
    {firstName: 'Veli', lastName: 'Şeftali'}
];

val = people[2];
val = people[2].firstName;

//döngü
for(let i=0; i<people.length; i++) {
    console.log(people[i].lastName)
}

console.log(val);
console.log(typeof people);

