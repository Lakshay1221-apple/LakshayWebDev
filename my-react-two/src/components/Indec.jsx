import React, { useState } from 'react';

const Indec = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    const Styles = {backgroundColor: "red", color: "blue", margin: "10px", borderRadius: "5px"}
    const Stylesone = {backgroundColor: "pink", color: "black", margin: "10px", borderRadius: "5px", display: "inline-block"}

    return (
        <div>
            <h1>This is made with the help of React State</h1>
        <div>
            <h1 style = {Stylesone}>Count: {count}</h1><br/>
            <button onClick={handleIncrement} style = {Styles} >Increment</button>
            <button onClick={handleDecrement} style = {Styles} >Decrement</button>
            <button onClick={handleReset} style = {Styles} >Reset</button>
        </div>
        </div>
    );
};

export default Indec;