"use strict"; //All the code below will be treated as newer version of js

// Documentation : https://tc39.es/ecma262/ and mdn docs
// js is DYNAMICALLY typed language ie variables can hold values of diff datatypes in a program(unlike c,java,c++ etc where we've to define a variable type)

console.log("Hello World");
console.log("Hellow"+true); //Hellowtrue
var simple = "Hi There ";
console.log(simple + "Mr Smarty");

// ************ var vs let vs const ************

let name = "JamaiLal";
let name2="JassiPaaji"
console.log(name);
console.table([name,name2])
// Variables declared with var have function scope and are accessible throughout the entire function, or global scope if declared globally ie even if declared later with same name within a fnc, it'll refer to the global variable only 
// Variables declared with let and const have block scope and are only accessible within the block in which they are defined.
// So we use let and const and avoid using var 

// Eg for var 
function exampleFunction1() {
    if (true) {
        var localVar = "I am a local variable with function scope";
        console.log(localVar); // Accessible within the function
    }
    console.log(localVar); // Still accessible here
}
exampleFunction1();
//console.log(localVar); // Not accessible here, throws ReferenceError and further execution stops

// Eg for let and const 
function exampleFunction2() {
    if (true) {
        let blockVar = "I am a local variable with block scope";
        const constVar = "I am a constant with block scope";
        console.log(blockVar); // Accessible within the block
        console.log(constVar); // Accessible within the block
    }
    //console.log(blockVar); // Not accessible here, throws ReferenceError
    //console.log(constVar); // Not accessible here, throws ReferenceError
}
exampleFunction2();

// ************ Some Notes ************ 
console.log(1 + 
    1) //is allowed but worsen readability
// alert(2-1) //this'll work in browser but not here(node)

// ************ Data Types ************ 
// We've 7 primitive data types 
let dataEg1 = "Broski" //1.String
let dataEg2 = 343 //2.number inc float
let dataEgx = 389289329n // 3. BigInt  (the "n" at last makes sure it's BigInt)
let dataEg3 = null //4.null : doesn't exist(absent)
let dataEg4 //5.undefined : exist but we don't know
let dataEg5 = true //6.Boolean
// dataEg6 
//7.Symbol : to make a value unique

// Non-Primitive(ie call by reference) : Arrays, Objects, Functions

//Interview Q
console.log("NULL type: ",typeof(null)) //Object
console.log("Undefined type: ",typeof(undefined)) //Undefined

//Undefined eg : 
// 1. variable declared but not initialized
// 2. fnc call has less arg than in actual fnc
// 3. accessing obj property which doesn't exist 
// 4. fnc which doesn't return anything returns undefined 


// let obj = { key: 'value' };

// obj.key = null; // The property exists but has a null value
// console.log(obj); // { key: null }

// delete obj.key; // The property is removed
// console.log(obj); // {}





// ************ Comparison Operators  ************
// 1. Equals (== or ===)
var rank = 5;
rank == 5 // will give true
rank === 5 // will give true

rank == "5" // will give true
rank === "5" // will give false
// == checks if values in lhs and rhs are equal
// === checks if values as well as data types in lhs and rhs are equal
// ###### Tip : We use === in most cases


// ************ Conditional Operators  ************
if (rank < 10){
    if(rank !== 1) // Not Equal To operator
        console.log("Damnnnn! Single Ranker");
    else
    console.log("Dudeeee! AIR 1");
}
else if(rank < 100){
    console.log("Wohoo! Double Digit Ranker");
}
else {
    console.log("Well! More than a Century");
}
if (5 !== "5") {
    console.log("SO it isn't true")
}

// Logical Operator
var cast = "Gen"
if(rank === 1 && cast === "Gen"){
    console.log("Man Ur an inspiration");
    }

if(rank === 69 || cast === "Gen"){
    console.log("Man's Gotta be tough");
    }

// Negation 
if(!(rank === 1 && cast === "Gen")){
    console.log("Man Ur NOT an inspiration");
    }

// String concatenation 
console.log(`The Rank of the person is ${rank}`);

// Function declaration 
function Welcome(nameVal){
    console.log(`"Welcome to JS" ${nameVal}`);
}

Welcome(name) //Function call

// ************ Arrays  ************
let cars = ['mcz','bmw',12];
console.log(cars[2])
cars.push('tata'); //Push operation : (4) ['mcz', 'bmw', 12, 'tata']
cars.pop(); //Pop operation : (3) ['mcz', 'bmw', 12]

for (let i = 0; i < cars.length; i++){
    let element = cars[i];
    
}
let fruits = ['apple', 'banana', 'orange'];
// Example 6: Array manipulation with map method
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ['APPLE', 'BANANA', 'ORANGE']

// Example 7: Filtering elements from an array
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // Output: ['banana', 'orange']

// Example 8: Using array spread operator
let moreFruits = [...fruits, 'pear', 'kiwi'];
console.log(moreFruits); // Output: ['apple', 'banana', 'orange', 'pear', 'kiwi']


// ************ Objects  ************   
const satyam = {attitude: 'loving', age: 40} // OP : {attitude: 'loving', age: 40}

satyam.attitude = 'caring'; // OP : {attitude: 'caring', age: 40}
// Here the object satyam is constant but we can change values. So what's constant? 

//This: 
//satyam = {attitude: 'caring', age: 20} //OP : Uncaught TypeError: Assignment to constant variable
// ie We can change the properties of the obj but not it's reference ie constantly points to same memory location but can changes the properties(values) present in that location
//If u want values to be constant as well : 
const ppl = Object.freeze({ name: 'John', age: 30 });
// ppl.city = 'New York'; // Attempting to add a new property won't work [and will give error(Cannot add property city, object is not extensible) in strict mode]
//ppl.name = 'Jane'; // Attempting to modify an existing property won't work [and will give error(Cannot assign to read only property 'name' of object '#<Object>') in strict mode]
console.log(ppl['city']) // {name: 'John', age: 30}
let person = {
    name: 'John',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'traveling'],
    address: {
        street: '123 Main St',
        city: 'New York',
        zipCode: '10001'
    },
    greet: function() {
        console.log('Hello!');
    }
};


