
const hello = function(){
    console.log("hello Function");
}
console.log(hello);
// Here hello is a reference to the fnc(here the fnc has no name) 
// Use cases: 
// 1.
function executeFunction(func) {
    func(); // Invoking the function passed as an argument
}
executeFunction(hello); // Output: "hello Function"

// 2. 
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}
const increment = counter();
increment(); // Output: 1
increment(); // Output: 2
const increment2 = counter();
increment2(); //Output : 1

// ### Closures and Lexical Scoping

// 1. **Definition of a Closure**:
//    - A closure is a function that accesses variables from its outer (enclosing) function’s scope.
//    - It is not necessary for the inner function to be returned to be considered a closure, but returning it is common for practical use.

// 2. **Variable Access in Closures**:
//    - Closures retain access to all variables in the outer function's scope, even if the variable is not used within the inner function.

// 3. **Example of a Closure**:
//    ```javascript
//    function outerFunction() {
//        let outerVariable = 'I am from outer function';

//        function innerFunction() {
//            console.log(outerVariable);
//        }

//        return innerFunction;
//    }

//    const closure = outerFunction();
//    closure(); // Outputs: I am from outer function
//    ```

// 4. **Lexical Scoping**:
//    - Lexical scoping means a function's scope is determined by its physical location in the source code.
//    - Functions have access to variables in their own scope and in their parent (enclosing) scopes.

// 5. **Scope Chain**:
//    - When a function is executed, it first looks for variable references in its own scope.
//    - If the variable is not found, it looks up the scope chain to the parent scope and continues up to the global scope.

// 6. **Example of Lexical Scoping**:
//    ```javascript
//    let globalVariable = "I am global";

//    function outerFunction() {
//        let outerVariable = 'I am from outer function';

//        function innerFunction() {
//            console.log(outerVariable); // Accesses outerVariable from outerFunction's scope
//            console.log(globalVariable); // Accesses globalVariable from global scope
//        }

//        innerFunction();
//    }

//    outerFunction();
//    ```

//    Output:
//    ```
//    I am from outer function
//    I am global
//    ```

// 7. **Scope Chain and Memory Access**:
//    - Closures retain access to outer function variables because of lexical scoping.
//    - JavaScript’s garbage collector does not reclaim memory for variables referenced by closures, ensuring the inner function can still access those variables even after the outer function has finished executing.

// 8. **Non-Lexical Scoping**:
//    - A function does not utilize lexical scoping if it accesses zero variables from its parent scope.
//    - Example:
//      ```javascript
//      function outerFunction() {
//          let outerVariable = 'I am from outer function';

//          function innerFunction() {
//              console.log('No variables from parent scope');
//          }

//          innerFunction();
//      }

//      outerFunction();
//      ```
//      In this case, `innerFunction` does not access any variables from `outerFunction`'s scope, so it does not form a closure.

// ### Key Takeaways:

// - **Closures**: Functions that access variables from their outer scope.
// - **Lexical Scoping**: Determines variable access based on the physical location in the source code.
// - **Scope Chain**: The hierarchical chain of scopes used to resolve variable references.
// - **Memory Management**: JavaScript retains references to variables used in closures, preventing garbage collection of those variables.
// - **Non-Lexical Scoping**: If a function accesses zero variables from its parent scope, it does not utilize lexical scoping and does not form a closure.


// ************ Arrow Fnc  ************
// it's a short way to write a fnc 
// Actual fnc : 
const hi = function(name){
    console.log(`Welcome ${name}`);
}
hi('satyam')

const hiii = (name) => {
    console.log(`Welcome ${name}`);
}
hiii('bharti')

//Can omit the paranthesis if we've just one argument and also {} if just 1 line
const yooo = name => console.log(`Yoooo ${name}`);
yooo('bharti')

// Saying hello after 2 sec : 3 ways
// 1 
setTimeout(sayHello,2000);
function sayHello(){
    console.log("Hello after 2 seccs")
}

// 2 
setTimeout(function(){
    console.log("Hello after 3 seccs")
},3000)

// 3 Using Arrow Fnc 
setTimeout( () => console.log("Hello after 4 seccs"),4000)

const num = [1,2,3,4]
const sq = num.map((element) => Math.pow(element,2))
console.log(sq)