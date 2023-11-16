//! Classes
/* 
    - Introduced in 2015
    - A function that helps us create objects
    - Defines a category of objects

* Base structure:

    class NameOfClass {
        constructor(parameter) {
            tis.key = parameter:
        }

        methodName() {
            ... bode block
        }
    }

*/

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
// console.log(one);

// 1   2
class Item {
    // 3            4
    constructor(name,desc,price) {
//      5    6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. Keyword to establish what type of "function". 
    2. The name of our class. Should be Pascal Case.
    3. keyword - is automatically run when the class is instantiated.
    4. The parameters for our constructed object. Est. values of the new object.
    5. Keyword - Refers to "this" specific object being created
    6. The name of the key to our new object.
    7. The value for those keys being created (set by parameters).
*/

let itemZero = new Item();
//console.log(itemZero); // returns an obj w/ set keys that hold undefined values.

let itemOne = new Item('beans', 'canned', 0.89);
//console.log(itemOne); // returns an obj w/ set keys values in the above

//let brokenItem = Item();
//console.log(brokenItem); // new is used to shape the new item with the same format of the original item
//TypeError: Class constructor Item cannot be invoked without 'new'

//! Factory Functions

let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(i,d,c) {
    return new Item(i,d,c);
};

let useFunction = processItem(iType,iDesc,iCost);
// console.log(useFunction);

//! Methods
class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.item = []; // making a defualt value for this key.
    }
    
// 1                  2
    addToInventory(newItem) {
//       3              4
        this.item.push(newItem);
        console.log('ItemAdded!')
    }

}

//5
let dryGoods = new DeptInventory('Dry Goods');
// console.log(dryGoods);
let itemTwo = new Item('corn', 'canned', 0.79);

//6
dryGoods.addToInventory(itemTwo);
console.log(dryGoods);

/* 
    1. Establishing the name of the method.
    2. This method requires a parameter. (not all methods will need this)
    3. "this" keyword references the specific object (dryGoods).
    4. Using an array method to add the "item object" to the items array.
    5. Creating new objects (dept / Item)
    6. Invoking the method available to dryGoods object. 
*/

//! Factory Methods
class Expense {
    static addUpChargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale* .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s) {
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpChargeForProfit(1);
itemToSell.addTax(0.07);
console.log(itemToSell);

let anotherItem = Expense.addUpChargeForProfit(5);
anotherItem.addTax(0.06);
console.log(anotherItem);