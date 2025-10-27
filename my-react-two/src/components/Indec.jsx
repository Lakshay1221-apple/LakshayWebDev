import React, { useState } from 'react';

const Indec = ({ friendName }) => {
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

    const [friend, setFriend] = useState([]); 

    const Addfriend = () => {
        
        const newFriends = friendName.filter(name => !friend.includes(name));
        setFriend(prevFriends => [
            ...prevFriends, ...newFriends
        ]);
    }
    
    const UpdateOneFriend = () => {
        setFriend(prevFriends => 
            prevFriends.map(f => (f === "Alex" ? "Alex Smith" : f))
        );
    }

    const [movies] = useState([
        {id : 1, title : "Spider Man", rating: 3},
        {id : 2, title : "Iron Man", rating: 6},
    ]);

    const [showMoviesList, setShowMoviesList] = useState(false);

    const ShowMovies = () => {
        setShowMoviesList(true);
    }
    
    const HideMovies = () => {
        setShowMoviesList(false);
    }

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
            {friend.length > 0 && <p style = {Stylesone}>Current Friends: {friend.join(', ')}</p>}
            <button onClick = {Addfriend} style = {Styles}>Add Prop Friends ({friendName.join(', ')})</button><br/>
            {friend.includes("Alex") && (
                <button onClick = {UpdateOneFriend} style = {Styles} >Update "Alex" to "Alex Smith"</button>
            )}
            <button onClick={ShowMovies} style={Styles}>Show Movies</button>
            <button onClick={HideMovies} style={Styles}>Hide Movies</button> 
            
            {showMoviesList && (
                <ul style = {Stylesone} >
                    {movies.map((movie) => (
                        <li key={movie.id}>
                            {movie.title}, Rating: {movie.rating}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </div>
    );
};

export default Indec;