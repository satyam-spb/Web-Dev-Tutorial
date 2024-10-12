let val=undefined
let val2 = Number(val) //Number (capital N is a classname)
// console.log(typeof(val2));
// console.log(val2);
// ************ Converting to Number ************ 
// "20" -> number 
// "20xt" -> NaN (Not a number) 
// true -> 1, false -> 0 
// null -> 0 (number)
// undefined -> NaN

// ************ to Boolean ************
let a1 = undefined
let b1 = Boolean(a1)
// console.log(typeof b1);
// console.log(b1);
// "" - false , "kuchbhi" -> true
// 0 - false , 1 - true, all other no.(inc -ve) - true
// null - false
// undefined - false



// ************ Conversion on Arithmetic Operations ************ 
// console.log("1" + 5 + 9); //159
// console.log(2 + 3 + "6"); //56

// console.log(true); //true
// console.log(+true); //1
// console.log(true+); //error

// let n1 = n2 = n3 = 5*2;
// console.table([n1,n2,n3]); // all 3 will be 10