const item = {
    name : "glass",
    price : 2599,
    rating : 4.5,
    // welcomemsg : function welcome(){
    //     console.log(`Welcomce user! Ur item is ${this.name}`);
        
    // }


    welcomemsg : function(){
        console.log(`Welcomce user! Ur item is ${this.name}`);
        console.log(this);
        
    }
}

item.welcomemsg //Will print nothing
// item.welcomemsg() 
// OP : Welcomce user! Ur item is glass
// {
//   name: 'glass',
//   price: 2599,
//   rating: 4.5,
//   welcomemsg: [Function: welcomemsg]
// }


// **************** INTERVIEW ****************
//If we print "this" in node environment,
// console.log(this); //OP : {}

//But if we do same thing in browser : 
// console.log(this);
// OP : Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// BECAUSE the global object in node is nothing and in browser is windows object

function ek(){
    let books = 10
    // console.log(this); //This will print a lot of things
    // console.log(this.books); //prints nothing 
    
    
}

// **************** Arrow fnc **************** 

// **************** INTERVIEW ****************
//Why don't we use "this" in arrow fnc?
const rate = () => {
    console.log("Broski");
    console.log(this); //{}
    //answer : cuz it refers to nothing( {} ) , they don't have their own "this"
}
// rate()


//Explicit return
const weight = (wt) =>{
    return wt+10
}
//Implicit return
const weight2 = (wt) => wt+10

//if we use implicit return to return object, we use ()
const weight3 = (wt) => ({kg:wt+10})