// ************** Hoisting in JS **************

// console.log(one(4));  //Executed even before defining 

function one(num){
    return num+1
}

// console.log(two(9)) //ReferenceError: two is not defined
const val = function two(num){
    return num+1
};


// ************** IIFE (Immediately Invoked Function Expression) **************
//it means a fnc is immediately called and it's not global ie can't access it's variables from outside 

//To use iife : wrap fnc within () and add ();

(function add(){
    console.log(5+9);
    
})();

//VIP : Always ensure there's a semicolon before iife, else TypeError: (intermediate value)(...) is not a function
/*
// Example Without Semicolon:
let bikeName = "Yamaha"
(function() {
    console.log("This is an IIFE");
})();
// In this case, JavaScript interprets it like this:

let bikeName = "Yamaha"(function() {
    console.log("This is an IIFE");
})();
JavaScript tries to call the Yamaha string as a function, which would cause an error, because "Yamaha" is not callable.

Example With Semicolon:
let bikeName = "Yamaha";
(function() {
    console.log("This is an IIFE");
})();
By placing a semicolon at the end of the first statement (let bikeName = "Yamaha";), the IIFE is properly interpreted as a separate expression, and JavaScript won't try to combine them.

When the Semicolon Before IIFE is Important:
The semicolon before an IIFE is particularly important when:

The IIFE follows another statement or expression.
You rely on Automatic Semicolon Insertion (ASI) and don't manually end your lines with semicolons.
*/