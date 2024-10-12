import { useState } from "react";

function ColorPicker(){
    const [color,setColor] = useState('#ffffff');
    function handleColorChange(e){
        setColor(e.target.value);
    }
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-picker-display" style={{backgroundColor: color}}>
                <p > Selected Color : {color} </p>
                {/* if we're embedding js and using css in js, we need to enclose css within js object eg style={{backgroundColor: color}} */}
            </div>
            

            <label>Select a Color</label> 
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
        
    );
}
export default ColorPicker