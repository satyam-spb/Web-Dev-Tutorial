
import ComponentC from "./ComponentC";
import { useContext } from "react";
function ComponentB(props){
    return(
        <div className="component-box">
            <h1>ComponentB</h1>

            {/* Using props  */}
            <ComponentC user={props.user} />
        </div>
    );
}
export default ComponentB

