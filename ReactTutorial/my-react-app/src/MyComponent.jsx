import { useState } from "react";
// import React, {useState} from "react"; 
// Both ways are correct, we import only useState from react 

// React Hook = special fnc which allows to use react features in a function based component without using a class component 
// useState() = React hook to create a stateful variable and a setter fnc to update it's value in virtual dom
// useState returns an array of 2 Elements, a variable & a setter fnc for that variable

function Mycomponent(){
    const [name,setName] = useState("Guest"); //Guest is the initial value
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        // name = "Ben Tenneson "; 
        // // This will update name variable value (Note : use "let [name,setName]" instead of "const [name,setName]" cuz we can't change constants) 
        // console.log(name); // We can see output here but not in webpg, cuz virtual dom not updated

        // So we use useState 
        setName("Ben Tenneson");

    }

    const updateEmployement = () => {
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name : {name} </p>
            <button onClick={updateName}>Set Name</button>

            <p>Is Employed : {isEmployed  ? "Yes" : "No" }</p>
            <button onClick={updateEmployement}>Toggle Employement</button>
        </div>
        
    );
}
export default Mycomponent