
import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
function ComponentD(props){
    const user = useContext(UserContext);
    return(
        <div className="component-box">
            <h1>ComponentD</h1>

             {/* Using props  */}
            {/* <h2>Prop Drilling haha {props.user} </h2> */}

            {/* useContext */}
            <h2>{`Use Context se aaya ${user} `}</h2>
            <h2>Use Context se aaya {user}</h2>
        </div>
    );
}
export default ComponentD

