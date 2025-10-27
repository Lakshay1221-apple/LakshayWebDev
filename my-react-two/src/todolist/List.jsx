import React, { useState } from 'react';

// --- Styles ---
const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#1a1a2e',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    color: '#e0e0e0',
};

const headingStyle = {
    textAlign: 'center',
    color: '#0ff',
    marginBottom: '30px',
    textShadow: '0 0 8px rgba(0, 255, 255, 0.7)',
};

const inputContainerStyle = {
    display: 'flex',
    marginBottom: '25px',
};

const inputStyle = {
    flexGrow: 1,
    padding: '12px 15px',
    fontSize: '1rem',
    border: '2px solid #2c2c4b',
    borderRadius: '6px 0 0 6px',
    backgroundColor: '#2c2c4b',
    color: '#fff',
    outline: 'none',
};

const addButtonStyle = {
    padding: '12px 25px',
    fontSize: '1rem',
    fontWeight: '600',
    backgroundColor: '#e94560',
    color: '#fff',
    border: 'none',
    borderRadius: '0 6px 6px 0',
    cursor: 'pointer',
    textTransform: 'uppercase',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

const listItemStyle = {
    backgroundColor: '#2c2c4b',
    margin: '10px 0',
    padding: '15px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    wordBreak: 'break-word',
};

const deleteButtonStyle = {
    backgroundColor: '#4a4a7c',
    color: '#e0e0e0',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
    marginLeft: '15px',
};

const List = () => {
    const [tasks, setTasks] = useState(["Learn React", "Build a project"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    const delTask = (indexToDelete) => {
        setTasks(tasks.filter((_, index) => index !== indexToDelete));
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Welcome to Your Task List</h1>
            <div style={inputContainerStyle}>
                <input 
                    type="text"
                    placeholder="Enter a new task"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    style={inputStyle}
                />
                <button onClick={addTask} style={addButtonStyle}>Add Task</button>
            </div>
            <ul style={listStyle}>
                {tasks.map((task, index) => (
                    <li key={index} style={listItemStyle}>
                        <span>{task}</span>
                        <button onClick={() => delTask(index)} style={deleteButtonStyle}>Mark as Complete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;