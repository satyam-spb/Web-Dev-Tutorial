// (Use updater whenever possible. Makes code futureproof) 
import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0);
    const Increment = () => {
    //     setCount(count + 1);
    // // Doing this once will update the count by 1. However, if you do it twice in succession, the count will only increase by 1 each time. This is because the state update is based on the initial value of count each time you call setCount:
    //     //Another way to say :  We can do this once but if we do it twice the count won't be updated by 2 but by 1 cuz everytime it uses previous value of counter like : 
    //     setCount(count + 1); // 0 + 1
    //     setCount(count + 1); // 0 + 1 
    // In React, state updates are batched, so the count doesn't get updated immediately.
        // in react the value is stashed together and then updated. 

        // To achieve the update twice we use updater function
        // U can use prev + variable name eg prevCounter or 1st letter of variable 
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);

        // This also works lol 
        // setCount(prevCount => prevCount + 1);
        // setCount(c => c + 1);
    }
    const Decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    const Reset = () => {
        setCount(0); //We do not need updater fnc here cuz reset value doesn't depend on current count value but we can use it like this 
        // setCount(c => c= 0);
    }
    return(
        <div className="counter-container">
            <h1>Live Counter </h1>
            <p className="counter-value">{count} </p>
            <div className="button-container">
                <button onClick={Decrement}>Decrement</button>
                <button onClick={Reset}>Reset</button>
                <button onClick={Increment}>Increment</button>
            </div>
            
        </div>
    );
}
export default Counter