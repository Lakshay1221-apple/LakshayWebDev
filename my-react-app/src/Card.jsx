import profilePic from "./assets/image-2.png";

function Card(){
    return(
        <div className = "card">
            <img className = "card-image" alt = "profile picture" src = {profilePic}></img>
            <h2 className = "card-title">Lakshay</h2>
            <p className = "card-text">I do Web Development and read politics</p>
 
        </div>

    );

    
}

export default Card;