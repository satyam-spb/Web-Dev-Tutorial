//singleton objects  : 
const user = new Object() //This is object made using singleton

const myUser = {
    name : {
        fullname : {
            firstname : "John",
            lastname : "Cena"
        }
    },
    age : 19
}

// console.log(myUser.name?.fullname);
// Here we use ? to check if the key "name" exists or not, useful in api calls





// ********** Merging Objects ********** 
const ob1 = {1 : "a", 2 : "b"}
const ob2 = {3 : "a", 2 : "c"}

// const ob3 = ob1 + ob2 
// console.log(ob3); //[object Object][object Object]

// const ob3 = {ob1 + ob2} //This isn't correct 
// const ob3 = {ob1 , ob2} 
// console.log(ob3) //{ ob1: { '1': 'a', '2': 'b' }, ob2: { '1': 'a', '2': 'b' } }


//Method 1
const ob3 = Object.assign({},ob1,ob2)
// console.log(ob3) 
//{ '1': 'a', '2': 'c', '3': 'a' }
// assign(target,source) : assigns source(n no. of sources) to target and returns target value. So here we kept {} as target, if assign(ob1,ob2) then both ob1 and ob3 would have the merged value
//Also If there are duplicate keys, the value from the object that comes later in the argument list (ob2 in this case) will overwrite the value from the object that comes earlier (ob1).


//Method 2 : spread
const ob4 = {...ob1,...ob2}
// console.log(ob4) 
//{ '1': 'a', '2': 'c', '3': 'a' }





// ********** Keys and Values access ********** 
// console.log(Object.keys(ob4));
// [ '1', '2', '3' ]
// console.log(Object.values(ob4));
// [ 'a', 'c', 'a' ]
// console.log(Object.entries(ob4));
// [ [ '1', 'a' ], [ '2', 'c' ], [ '3', 'a' ] ]
// NOTE  : all outputs are in array (always remember data type of return as well)




// ********** Check if a key exists ********** 
// console.log(ob4.hasOwnProperty('2'))
// true




// ********** de-structuring an object **********
//Used a lot in react 
const breadUser = {
    username : "Jon",
    price : 44,
}
//Now to access username, we need to use it like : 
// console.log(breadUser.username); 
//But there's a shortcut to use it
const {username} = breadUser
//now we can use "username" without breadUser
// console.log(username);

// We can also rename it : 
const {username : name} = breadUser
// console.log(name);





// ********** API ********** 
// Earlier we got api in xml(complex), now we get in json(easy)

// How to understand api : json formatter (https://jsonformatter.org/) -> view