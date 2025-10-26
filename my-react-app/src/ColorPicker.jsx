import React, {useState} from "react";

function ColorPicker() {
  
        const [color, setColor]  = useState('#FFFFFF');

        function handelColorChnage(event){
            setColor(event.target.value);
        }

        return(
            <div className = "color-picker-container">
                <h1>Color Picker</h1>
                <div className = "color-display" style = {{backgroundColor: color , width: '100px', height: '100px', border: '1px solid #000'}}>
                    <p>Selectd Color: {color}</p>
                </div>
                <label>Select A Calor:</label>
                <input type = "color" value = {color} onChange = {handelColorChnage}/>
            </div>
        )

}


export default ColorPicker;

