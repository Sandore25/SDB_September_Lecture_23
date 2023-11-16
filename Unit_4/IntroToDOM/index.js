/* 
! DOM
  - Document Object Model
  - Only through the browser.

  Frame:
    - Document: HTML page (in the browser)
      - "document" - Is a global variable 
    - Object: Elements and comments (nodes)
    - Model: Arrangement
    
  - Data Representation of objects that comprise the structure and content of a document of the web.

  * BOM
    - Browser Object Model
    - "window" - global variable
    - various methods available
*/
//console.log('Test')

function askForStuff() {
  prompt();
}

//askForStuff();
console.log(document);
console.log(document.URL);
console.log(document.location); //Same as URL except it returns an object form
console.log(document.title);
document.title = "DOM it";
console.log(document.title);

//! Creating Our First Element
let h1 = document.createElement('h1');
console.log(h1);

/* 
  Our variable now has access to our various properties
    - innerHTML: can inject a block of HTML
    - innerText: returns the visible text contained in a node.
    - textContent: returns the full text

    ex:
      <p>Hello <b>World</b></p>
      ~ innterText would return just "hello"
      ~ text content would return "Hello World"
*/

h1.innerText = 'Creating my first DOM element!';
console.log(h1);
/* 
  * Chain of Evets:
    1. Create the elemtne
    2. Apply the value/properties
    3. Place the element
*/

console.log(document.body);
document.body.appendChild(h1);// adds h1 element to document

h1.style.color = "blue";
h1.style.textAlign = 'center';


h1.style =`
text-shadow: 2px 2px 2px yellow;
color: blue;
text-align: center;
`;

h1.className = 'h1-class-name';
// JS require camelCasing as "className" instead of "class" due to it being a keyword.
h1.id = 'set-id';

/* 
  ! Finding Elements

  *  HTMLCollection
      - An array-like object
      - allows access to index, properties, and methods to help navigate and modify.
      - Does not allow to modify a group of elements all at once.
      - can loop through it.
      -  can use .length to get the size of the list.

      Accessing Multiple Elements requires these methods:
        -getElementsByTagName()
        -querySelectorAll()
        - getElementsByClassName()
*/

let li = document.getElementsByTagName('li');
console.log(li[0]);
let bathroom = li[0];
bathroom.style.color = 'red';
//li.style.color = 'green';

for(i of li) {
  i.style.color = 'green';
 // i.style.textAlign = 'center'
}

/* 
* .querySelector()
    - grabs first instance of an element of null if nothing found.
    - can taget by ID, Class or element
      - will need to append # for ID
      - will need to append . for class
*/

let firstLi = document.querySelector('li');
//console.log(firstLi);

let toDolist = document.querySelector('#listTitle');
//console.log(toDolist);
toDolist.style.textAlign = 'center';

/* 
*  .querySelectorAll()
      - Returns a Static nodeList (an Array) list of elements.
*/