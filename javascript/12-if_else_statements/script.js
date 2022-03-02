// If/else statements

const firstName = 'Aybars';
const age = 30;
const isStudent = false;
const school = 'university';

/*
if(firstName === 'Aybars') {
    console.log('Merhaba Aybars');
}

if(age === 30){
    console.log('yaşınız 30');
}

if(isStudent) {
    console.log('Merhaba öğrenci');
} else {
    console.log('Merhaba işler nasıl?');
}
*/


/*
if(age>=18){
    if((school=='university') || (school =='high school')) {
        console.log('Ehliyet alabilirsiniz');
    } else {
        console.log('Eğitim durumunuz yetersiz.');
    }

} else {
    console.log('Ehliyet alamazsınız');
}
*/


/*
if(age>0 && age<12) {
    console.log(`${firstName} is a child`);
}else if(age>=13 && age<=19) {
    console.log(`${firstName} is a teenager`);
}else {
    console.log(`${firstName} is an adult`);
}
*/

//undefined control
// let id = 123452;

if (typeof id !== 'undefined') {
    console.log('id: '+id);
}else{
    console.log('no id');
}