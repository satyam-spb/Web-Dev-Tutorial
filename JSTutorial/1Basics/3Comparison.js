// console.log(null == 0); //false
// console.log(null > 0); //false
// console.log(null >= 0); //true cuz it converts null to 0 then compares and other cases it converts to NaN
// console.log(null != 0); //true

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined >= 0); //false
// console.log(undefined != 0); //true
// console.log(undefined < 0); //false

const fnc = function(){
    console.log("Hi");
    
}

console.log(fnc); // [Function: fnc] => (but known as object function)