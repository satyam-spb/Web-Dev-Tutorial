// useState() : re-renders component when state value changes 

// useRef() : uses Reference, doesnt re-render when state value changes. Useful when u want component to remember some info but do not want info to trigger render   

import { useState,useEffect,useRef } from "react";



function LrnUseRef(){
    let [num,setNum] = useState(0);
    let numRef = useRef(0);
    let inputRef = useRef("");

    useEffect(() => {
        //Will print this on console everytime component renders or re-renders
        console.log("Component Rendered");
    })

    function handleClick(){
        setNum(n => n+1);
    }

    function handleClick1(){
        numRef.current++;
    }

    function handleClick2(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "#414141";

    }

    // When we see console, the component re-renders everytime we click useState button but doesn't for useRef 

    return(
        <div>
            <button onClick={handleClick}>Click for UseState</button>
            <button onClick={handleClick1}>Click for UseRef</button> <br />
            <button onClick={handleClick2}>Click for UseRef Input</button>
            <input type="text" ref={inputRef} />
        </div>
    );
}
export default LrnUseRef