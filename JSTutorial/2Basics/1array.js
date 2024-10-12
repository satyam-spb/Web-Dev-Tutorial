//Uk one way, this is another way to declare array
const Food = new Array("Bhakarwadi","Potato Biscuit","Mini Samosa")
//SHALLOW COPY happens in array ie same reference for both variables 
//Uk push, pop operations

// Food.unshift("Pav") // adds element at 0 index
// console.log(Food) // [ 'Pav', 'Bhakarwadi', 'Potato Biscuit', 'Mini Samosa' ]
// Food.shift() //Removes element at 0 index
// console.log(Food) //[ 'Bhakarwadi', 'Potato Biscuit', 'Mini Samosa' ]



// ************* Questionarre Methods *************
// console.log(Food.includes("Raita")) //Boolean result
// console.log(Food.indexOf("Bundi")); //Since element doesn't exist O/P  : -1 

const stringWala = Food.join() //joins all elements separated by comma and convertes to String 
// console.log(stringWala); //Bhakarwadi,Potato Biscuit,Mini Samosa



// ************* Slice vs Splice *************

const Arr = [9,5,4,1,8,56,7]
const ekArr = Arr.slice(1,3)
// console.log(`Arr after slice is ${Arr} and sliced part : ${ekArr}`); 
// O/P : Arr after slice is 9,5,4,1,8,56,7 and sliced part : 5,4
// const ekAurArr = Arr.splice(1,3)
// console.log(`Arr after splice is ${Arr} and sliced part : ${ekAurArr}`);
// O/P : Arr after splice is 9,8,56,7 and sliced part : 5,4,1




// ************* Merging Arrays *************
// Food.push(ekArr)
// console.log(Food); 
// [ 'Bhakarwadi', 'Potato Biscuit', 'Mini Samosa', [ 5, 4 ] ] We can see it's pushed as a single element therefor it's not used 

const ekNewArr = Food.concat(ekArr) //NOTE : doesn't modify Food or ekArr
// console.log(ekNewArr); 
// [ 'Bhakarwadi', 'Potato Biscuit', 'Mini Samosa', 5, 4 ] 

// BUT using const() we can merge only 2 arrays at once so we use spread ie
const ekNewArr2 = [...Food, ...ekArr] //U've already used this
//  console.log(ekNewArr2); 

const ArraySahab = [1,2,3,[1,2,3,4],[1,2,[1,2,3]]] //this is array of depth 2 ie [][][]
// if we want all elements in a single array with 0 depth : 
const ekArraySahab = ArraySahab.flat(2) //here 2 is the depth (if we do not know the depth then we can pass infinity instead of 2)
// console.log(ekArraySahab);
// [
//     1, 2, 3, 1, 2,
//     3, 4, 1, 2, 1,
//     2, 3
//   ]
const ekAurArraySahab = ArraySahab.flat(1)
// console.log(ekAurArraySahab);
// [ 1, 2, 3, 1, 2, 3, 4, 1, 2, [ 1, 2, 3 ] ]




//Check if array
// console.log(Array.isArray("Ramesh")); //false

// ************* convert to Array ************* 
// console.log(Array.from("ramu kaka"));
// [
//     'r', 'a', 'm',
//     'u', ' ', 'k',
//     'a', 'k', 'a'
//   ]

//INTERVIEW
// console.log(Array.from({name : "HeroSatyam"}));
// []  it gives empty array cuz doesn't know how to make array, should it make it from the keys or the values

// const a = 20,b=10,c=40
// console.log(Array.of(a,b,c));
// [ 20, 10, 40 ]




