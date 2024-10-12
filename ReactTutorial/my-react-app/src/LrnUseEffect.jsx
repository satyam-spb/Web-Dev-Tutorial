// useEffect is a react hook which is used to execute some code when : 
//     - a component re-renders
//     - a component is mounted(ie when component is rendered into the dom  1st time) 
//     - the state of a value changes 

// useEffect(function,[dependencies]) where [dependencies] is optional
// 1. useEffect(() => {}) perform the operation/code in fnc everytime when component re-renders
// 2. useEffect(() => {} ,[]) perform the operation/code in fnc when component mounts, here [] is empty
// 3. useEffect(() => {}, [valueX] ) erform the operation/code in fnc when component mounts or valueX changes

// Place useState and useEffect calls near the top of the component to maintain readability and organization.
// Group related hooks together to make the component logic clearer.

import { Component, useEffect, useState } from "react";

function LrnUseEffect(){
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    // useEffect(() => {
    //     // everytime the component re-renders we update the pg title 
    //     document.title = (`count ${count}`);
    // })

    // useEffect(() => {
    //     // when the component mounts we update the pg title 
    //     document.title = (`count ${count}`);
    // },[])

    // useEffect(() => {
    //     // when the component mounts + when value of count changes we update the pg title(the title won't update when value of color changes)
    //     document.title = (`count ${count}`);
    // },[count])

    // useEffect(() => {
    //     // when the component mounts + when value of count or color changes we update the pg title 
    //     document.title = (`count ${count} ${color}`);

    //     return() => {
    //         // Write cleanup code 
    //     }
    // },[count,color])

    // NOTE : if we write document.title = (`count ${count} ${color}`); outside any useEffect it'll stil work so why use useEffect ? cuz : 
    // 1. readability and organised
    // 2. if not used useEffect, the title updates everytime regardless anything happens. We'd want to update it only in specific conditions 

    function addCount(){
        setCount(c => c+1);
    }
    function changeColor(){
        setColor(c => c=== "green" ? 'red' : 'green'); 
    }

    // Window's width and height in real time 

    // update value when window resizes 
    // window.addEventListener("resize",handleResize);
    // console.log("Event Listener");
    // When we see console "Event Listener" is printed so many times ie everytime the Component re-renders we're adding a new Event Listener but we need just 1 Event Listener. That's why we use useEffect 
    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("Event Listener");
        // now u see, the Event Listener is loaded twice, only when component mounts 

        // return is used for cleanup when component is demounted 
        return(() => {
            // it's necessary to remove event Listener added in a component when component is unmounted else undefined behaviour 
            window.removeEventListener("resize",handleResize);
        console.log("Event Listener Removed");
        })
    },[])
    
   
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(
        <>
            <p style={{color: color}}>Count : {count} </p>
            <button onClick={addCount}>Add</button>
            <button onClick={changeColor}>Change color</button>

            <p>Screen Width : {width}px </p>
            <p>Screen Height : {height}px </p>
        </>
    );
}
export default LrnUseEffect