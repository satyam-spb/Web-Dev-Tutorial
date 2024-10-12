const bikes = [
    {
        name : "A",
        price : 44
    },
    {
        name : "b",
        price : 45
    },
    {
        name : "c",
        price : 98
    },
    {
        name : "d",
        price : 81
    },
    {
        name : "e",
        price : 64
    }
]

const attitudes = [90, 89, 82,44,76]

// // *********** filter ***********
// let mybikes = bikes.filter( (bk) => {bk.price > 50} )
// console.log(mybikes); //Tell me why is this empty?

const mybikes = bikes.filter( (bk) => (bk.price > 50) )
// console.log(mybikes);

// *********** Chaining ***********
//we can chain there methods together, eg :
const good = attitudes.map( (at) => at+5 ).map( (at) => at*2 ).filter( (at) => at>150)
//Here 1st method(map) works with values of attitudes, the 2nd method(map) works with the modified values of 1st map() and 3rd(filter) works with modified values of the 2nd map. After all methods are executed, only then the values are passed to the "good"

console.log(good);



// *********** reduce *********** 
// reduce has 2 parameters 
// 1. function(accumulator,currentvalue) : we get value of each iteration of Array, object etc in currentvalue
// 2. an initial value of accumulator 

const arr = [3,5,7]
const newVal = arr.reduce( (acc,curval) => {
    console.log(`acc : ${acc} and cur : ${curval}`);
    
    return acc+curval
} , 4)//4 is initial value of accumulator
// OP : acc : 4 and cur : 3
// acc : 7 and cur : 5
// acc : 12 and cur : 7

// console.log(newVal); //19

