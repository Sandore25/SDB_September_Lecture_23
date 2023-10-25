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
console.log(one);