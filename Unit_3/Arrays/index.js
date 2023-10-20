/* 
    Array
        - Denoted with square brackets [ ]
        - Indices starts at zero 0
        - Using a property called "length", we can find the sum of the data stored.
        */

let list = ['milk', 'bread', 'chicken', 'coffee' ];
//           0         1        2          3
console.log(list[2])
console.log(list.length)

list[0] = 'chocolate milk'; // item 0 changed from milk to chocolate milk
console.log(list);

let avengers = [
    'Nick', 2, false, 'Steve', 'Bruce', [
        'Tony', 8, true
    ]
];

console.log(typeof avengers)
console.log(avengers instanceof Array);

console.log(avengers[4])
console.log(avengers[5][2]) // the second array is in position 5 of the first array. True is in the second position of the second array
console.log(`Hello ${avengers[0]}. Hello ${avengers[5][0]}`)

//!Array Methods

// .push() Adds items to the array
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('pizza'); // does need some argument to push or add to array. Adds to the end of the array.
console.log('Push: ', food);

//.splice(Target position, how many to be removed, replace with what) Edits arrays 
food.splice(1, 1, "tacos");
console.log('Splice: ', food);

food.splice(1, 0, 'Steak');
console.log('Splice 2: ', food);

// .pop() Removes item from end of array

food.pop();
console.log('POP: ', food);

// .shift() Removes items from beginning of array

food.shift();
console.log('SHIFT: ', food);

// .unshift() Adds items to the beginning of the array
food.unshift(' Hamburger', 'Salad');
console.log('UNSHIFT: ', food);

// .toString()
let rgb = ['red','green','blue'];
console.log(typeof rgb.toString());
console.log(typeof rgb);