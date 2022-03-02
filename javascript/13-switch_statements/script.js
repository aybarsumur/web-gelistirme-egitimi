// Switch statements

/*
let category = 'telefon';

switch(category){
    case 'telefon':
        console.log('telefon kategorisi');
    break;

    case 'bilgisayar':
        console.log('bilgisayar kategorisi');
    break;

    default:
        console.log('yanlış kategori');
}
*/

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;

    case 1:
        day = "Pazartesi";
        break;

    case 2:
        day = "Salı";
        break;

    case 3:
        day = "Çarşamba";
        break;

    case 4:
        day = "Perşembe";
        break;

    case 5:
        day = "Cuma";
        break;

    case 6:
        day = "Cumartesi";
        break;
}

console.log(`Bugün günlerden ${day}.`);


let day1;

switch (new Date().getDay()) {
    case 0:
    case 6:
        day1 = "Hafta Sonu";
        break;

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day1 = "Hafta İçi";
        break;

}

console.log(`Bugün ${day1}.`);


const age = 30;
const firstName = 'Aybars Umur';

//switch içine başka bir koşul belirtmeden girmek için true dedim.
switch (true) {
    case (age >= 0 && age <= 12):
        console.log(`${firstName} is a child`);
        break;

    case (age >= 13 && age <= 19):
        console.log(`${firstName} is a teenager`);
        break

    default:
        console.log(`${firstName} is an adult`);
}
