//*************for of loop : to iterate array, object, string
const prices = [999,459,834,234]
for (const price of prices) {
    // console.log(price);
    
}
// 999
// 459
// 834
// 234



//************* map *************
//ordered and unique values(ie no repetition)
//key value pairs
const map = new Map()
map.set('js',"Javascript")
map.set('ts',"typescript")
map.set('py',"python")
map.set('java',"java")
map.set('js',"Javascript") //repeat
// console.log(map);
/*OP : Map(4) {
    'js' => 'Javascript',
    'ts' => 'typescript',
    'py' => 'python',
    'java' => 'java'
  }  */

//************* for of in map *************
/*for (const key of map) {
    console.log(key);//prints array of key value pairs
    
} */

/*
for (const [key,value] of map) {
        console.log(`.${key} and ${value}`)
        
    } */

const tire = {
    durability : 80,
    price : 6999,
    warrenty : 3
}
// for (const element of tire) {
//     console.log(element); //TypeError: tire is not iterable
    
// }
// for (const [key,value] of tire) {
//     console.log(`key: ${key} and value : ${value}`); //TypeError: tire is not iterable
    
// }


// ************* for in *************

//OBJECT : 
// for (const val in tire) { //val will have keys of obj
//     console.log(`key : ${val} and value : ${tire[val]}`);
    
// }
/*
OP : key : durability and value : 80
key : price and value : 6999
key : warrenty and value : 3 */


//ARRAY :
for (const ek in prices) {
    // console.log(ek); //will print keys ie 0 1 2 3
    // console.log(prices[ek]); //prints values
    
}

// ************* for each ************* 
const attitudes = [90, 89, 82,44,76]
// attitude.forEach() >>> foreach needs a callback fnc 
// callback fnc  : fnc name isn't needed
// eg  : function add(a,b) >>> function (a,b)

attitudes.forEach(function(har){
    // console.log(har);
    
})
//OP : 90
// 89
// 82
// 44
// 76

//or use arrow fnc

attitudes.forEach((har) => {
    // console.log(har);
    
})

// foreach needs a fnc as parameter... so we can use prexisting fncs
function print(item){
    console.log(item);
    
}

// attitudes.forEach(print) 
//NOTE : give the fnc reference, not fnc call ( ie attitudes.forEach(print()) ) is wrong

// ************* INTERVIEW *************
//for each has access to value, index and complete array
function printall(item,index,arry){
    console.log(item,index,arry);
    
}
// attitudes.forEach(printall)

//Array of Objects 
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

// bikes.forEach((obj) => {
//     console.log(`Name : ${obj.name} Price : ${obj.price}`);
    
// })


// ************* INTERVIEW *************
//foreach doesn't return any value even if we use "return"
const allBike = bikes.forEach((obj) => {
    // console.log(`Name : ${obj.name} Price : ${obj.price}`);
    
})
// console.log(allBike); //undefined

const allBike2 = bikes.forEach((obj) => {
    // console.log(`Name : ${obj.name} Price : ${obj.price}`);
    return obj
})
// console.log(allBike2); //undefined

//Since foreach doesn't return values, We use filter,map, reduce