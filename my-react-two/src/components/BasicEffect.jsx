
import React, { useState, useEffect } from 'react';

const BasicEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      console.log(`Count is now ${count}. Updating document title.`);
      document.title = `🎄 You've clicked ${count} times!`;
    }
  }, [count]);

  
  const containerStyle = {
    padding: '25px',
    fontFamily: "'Georgia', serif",
    backgroundColor: '#f8f8f8',
    border: '3px dashed #c62828',
    borderRadius: '15px',
    textAlign: 'center',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
  };

  const headingStyle = {
    color: '#2e7d32', 
    textShadow: '1px 1px 2px #fff',
    fontSize: '2rem'
  };

  const buttonStyle = {
    padding: '12px 25px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    backgroundColor: '#d32f2f',
    color: '#fff',
    border: '2px solid #b71c1c',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-out',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  };
 

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>🎄 Jingle Count 🎄</h2>
      <p style={{fontSize: '1.5rem', margin: '20px 0', color: '#333'}}>{count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={buttonStyle}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Add a Jingle! 🔔
      </button>
    </div>
  );
};

export default BasicEffect;