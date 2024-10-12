//SINGLETON : objects made using constructor is singleton and the ones we declare like literals is NOT singleton
// ie made using Object.create is singleton

//using literals
const User = {
    name : "jack",
    "Premium User" : true,
    age : 21,
    isLoggedIn : false,
    items : ["Chips","Tomato"],
} //this is a non-singleton object
// console.log(User.name); //Jack

// console.log(User[name]); // ReferenceError: name is not defined
// This error occurs cuz js saves keys as Strings so we need to pass it as String
// console.log(User["name"]); //jack

//Why we need 2 ways to access?
// If we want to access the key "Premium User" then we can't do that using dot method
// Both ways are incorrect : 
// console.log(User."Premium User");
// console.log(User.Premium User);

// console.log(User["Premium User"]);




// ******************* Symbols in Objects *******************
const sym = Symbol("kuchbhi")
const User2 = {
    name : "Rocky",
    age : 19,
    sym : "User2Key"
}
// Now if we see typeof sym
// console.log(typeof User2.sym); //string
// ie it's a string, not a symbol

// To use as symbol : 
const User3 = {
    name : "Rocky",
    age : 19,
    [sym] : "User3Key"
}

// console.log(typeof User3["sym"]) //undefined
User.age = 25
// console.log(User);

// Object.freeze(User) //Now it can't be modified
User.age = 45
// console.log(User);

User.Welcome = function() {
    console.log(`Welcome ${this["name"]}`);
    
}

// console.log(User.Welcome());
// Welcome jack
// undefined

// console.log(User.Welcome);
// [Function (anonymous)]

// User.Welcome()
// Welcome jack