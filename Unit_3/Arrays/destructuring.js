//! Array Destructuring
/* 
    - Syntax is on the left side of assignment operator
    - Great for pulling infor out of an array and assigning data to it's own variable.

*/

const fullName = ['Jane', 'Doe'];

//const fName = fullName[0];
//const lName = fullName[1];

const [firstName, lastName] = fullName;
//console.log(firstName, lastName);

//console.log(`Hello Mrs. ${lastName}`)

//! Spread 

/* 
    - denoted by three consecutive periods: ...
    - pulls out all elements of an array and gives them to you as standalone list of elements.

* Concept of the spread operator- NOT syntax

const fullName =[ 'Rocket', 'Racoon'];

...fullName // 'Rocket', Racoon'

const elements = ...fullName;

*/

const copiedFullName = [...fullName];
//const copiedFullName = [fullName]; Gives you an array inside of an Array
//console.log(copiedFullName);

fullName.push('Mrs.');
//console.log(fullName, copiedFullName);

//console.log(Math.min(1,5,-3));

const prices = [10.99, 5.99, 3.99, 6.59]
//console.log(Math.min(...prices));
//console.log(Math.max(...prices));

//! Rest
const fullName2 = [
    'Jane', 'Doe', 'Mrs.', {month: 3, date: 22, year: 1973},
    'testOne', 2, 'test3', 4, true, false
];

const [lName, fName,,, ...otherInfo] = fullName2;

console.log(fName);
console.log(lName);
console.log(otherInfo);

const [,,,birthday] = fullName2; //each comma represents an item in the array
console.log('object in array: ', birthday)




