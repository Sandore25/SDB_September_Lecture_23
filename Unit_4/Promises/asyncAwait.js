/* 
! Async/Await
  - Introduced in ES8 in 2017
  - Can make any function an async function simply by denoting as such.
* Keywords
  - async
    - Denotes a function
  - await
    - calls a process to "wait" for a result
  - Can help us reduce the need for Callback functions
  - Cannot be used in a loop
  - ALWAYS returns a promise
*/

// Some syntax
async function asyncFuncDeclaration() {
  // code block...
}

let FuncExpression = async function() {
  // code block...
}

let arrowFunc = async() => {
  // code block...
}

async function getName() {
  return "Gandalf";
}

getName().then(data => console.log(data));

//! Await - Tells JS that a promise is being returned and to wait on that results.

async function extraData() {
  let info = await returnData(); // await makes it so the return isn't run until we get some sort of response.
  return(`${info} in some cloud...`);
}

extraData().then(data => console.log(data));