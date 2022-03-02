// Template Literals

const fullName = "Aybars Umur";
const city = "Boston";
const yearOfBirth = 1999;

let val;

/*
val = 'My name is '+fullName+'. I\'m '+(2022-yearOfBirth)+' years old.'+' And I live in '+city+".";
*/

//template literal

// val =`My name is ${fullName}. I'm ${2022-yearOfBirth} years old. And I live in ${city}.`;
val =`My name is ${fullName}. I'm ${2022-yearOfBirth>=18?'over 18':'under 18'} and I live in ${city}.`;

/*
Ternary Operator
2022-yearOfBirth>=18?'over 18':'under 18'  => 2022-yearOfBirth 18den büyük veya eşit mi? eğer true ise iki nokta üstünden öncesi, false ise sonrası  sorgu ? true : false
*/

console.log(val);