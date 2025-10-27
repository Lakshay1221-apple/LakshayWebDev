import React from 'react'
import { useState } from 'react'


const NeonContainerStyle = {
    backgroundColor: '#1a1a2e', 
    color: '#fff',
    padding: '20px',
    borderRadius: '12px',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    marginBottom: '20px'
};

const counterStyle = { 
    display: 'inline-block',
    padding: '15px 30px',
    margin: '20px 0',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#0ff', 
    backgroundColor: '#2c2c4b',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.2)',
};

const buttonStyle = {
    backgroundColor: '#e94560', 
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.2s ease-in-out',
    textTransform: 'uppercase',
};

const ExampleOne = () => {
    
    const [count, setCount] = useState(() => Math.floor(Math.random() * 100));
    
   
    const handlePlusTen = () => setCount(c => c + 10);
    const handleMultiplyTen = () => setCount(c => c * 10);
    const handleMinusTen = () => setCount(c => c - 10);
    const resetTheCount = () => setCount(0);

    const generateNewRandom = () => {
        const newRandom = Math.floor(Math.random() * 100);
        setCount(newRandom)
    }
    
    return (
        <div style={NeonContainerStyle}>
            <h1 style={counterStyle}>The Random Count is {count}</h1><br />
            <button onClick={handlePlusTen} style={buttonStyle}>Add Ten to the Count</button>
            <button onClick={handleMultiplyTen} style={buttonStyle}>Multiply By Ten</button>
            <button onClick={handleMinusTen} style={buttonStyle}>Minus Ten</button>
            <button onClick={resetTheCount} style={buttonStyle}>Reset the Count</button>
            <button onClick={generateNewRandom} style={buttonStyle}>Generate New Random</button>
        </div>
    );
}
  
export default ExampleOne;