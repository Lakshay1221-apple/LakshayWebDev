import imageUrl from './assets/ac89ab8e-e526-485d-ab16-75811869d6a4.jpg';

function ProfilePicture(){

    const handleClick = (e) => e.target.style.display = "none";
    
    return(<img onClick = {(e) => handleClick(e)} src={imageUrl} alt="Profile Picture" className = "image2"></img>)
}

export default ProfilePicture;