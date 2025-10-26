
import React, { useState } from 'react';

function Button1() {
    // 1. Use useState for variables that need to persist and cause re-renders
    const [count, setCount] = useState(0); 
    const [button2Text, setButton2Text] = useState("Click to change me! 😃"); 

    // 2. Event handler for the first button (Click ME 😁)
    const handleClick2 = (name) => {
        // The state variable 'count' is now reliable within this function
        if (count < 3) {
            // setCount is asynchronous, but 'count' in this render is correct
            setCount(prevCount => prevCount + 1);
            console.log(`${name} clicked me ${count + 1} times`); 
        } else {
            console.log(`${name} stop clicking me`);
        }
    };

    // 3. Event handler for the second button (button2Text)
    const handleClick = () => {
        setButton2Text("OUCH! 😡"); 
    };

    return (
        <> 
            <button className="btn1" onClick={() => handleClick2("Lakshay")}>
                Click ME 😁 (Clicked: {count})
            </button>
            <br/> 
            <br/> 

            <button className="btn2" onClick={handleClick}>
                {button2Text} 
            </button>
        </>
    );
}

export default Button1;
