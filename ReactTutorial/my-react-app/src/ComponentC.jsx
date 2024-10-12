import ComponentD from "./ComponentD";
import { useContext } from "react";
function ComponentC(props){
    return(
        <div className="component-box">
            <h1>ComponentC</h1>

             {/* Using props  */}
            <ComponentD user={props.user} />
        </div>
    );
}
export default ComponentC

