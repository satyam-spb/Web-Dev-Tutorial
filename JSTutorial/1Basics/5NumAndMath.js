const num = new Number(10)
// console.log("String : ",num.toString().length);
// console.log("Fixed and length : ",num.toFixed(3).toString().length) //10.000 so length = 6
// console.log("Precision : ",num.toPrecision(3));

const price = 12345000
// console.log(`Price in USA ${price.toLocaleString()}`); //12,345,000
// console.log(`Price in India ${price.toLocaleString('en-IN')}`); // 1,23,45,000




// ***************************** Math Library *****************************
// console.log(Math); //Op : "Object [Math] {}" ie Math is an object
// console.log(Math.ceil(4.1)); //5
// console.log(Math.floor(4.8)); //4
// console.log(Math.round(4.5));  //5

// ******** Random Fnc ********* 
console.log(Math.random()); //bw 0 and 1
//Random value for a range
const min = 100, max = 200
console.log(Math.floor(Math.random()* (max-min+1) + min )); //here we write + 1 so that if we get 0 in random(eg 0.0023 => 0) we add 1 to get a non-zero digit







