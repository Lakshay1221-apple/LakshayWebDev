import React, { useState } from 'react';

const CopyInput = () => {
    const [inputValue, setInputValue] = useState("Copy this text!");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };


    const containerStyle = {
        padding: '25px',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        backgroundColor: '#1a1a2e',
        borderRadius: '12px',
        textAlign: 'center',
        maxWidth: '500px',
        margin: '20px auto',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
    };

    const inputContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const inputStyle = {
        flexGrow: 1,
        padding: '12px 15px',
        fontSize: '1rem',
        border: '2px solid #2c2c4b',
        borderRadius: '6px 0 0 6px',
        backgroundColor: '#2c2c4b',
        color: '#fff',
        outline: 'none'
    };

    const buttonStyle = {
        padding: '12px 20px',
        fontSize: '1rem',
        fontWeight: '600',
        backgroundColor: '#e94560',
        color: '#fff',
        border: 'none',
        borderRadius: '0 6px 6px 0',
        cursor: 'pointer'
    };

    const copiedMessageStyle = {
        color: '#28a745',
        marginTop: '15px',
        fontWeight: 'bold',
        height: '20px' 
    };

    return (
        <div style={containerStyle}>
            <div style={inputContainerStyle}>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} style={inputStyle} />
                <button onClick={handleCopy} style={buttonStyle}>Copy</button>
            </div>
            <p style={copiedMessageStyle}>{copied ? "Copied!" : ""}</p>
        </div>
    );
};

export default CopyInput;