
import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {

    const htwostyles = {color: "blue", backgroundColor: "yellow" , display : 'inline-block' }
 
    if (loggedIn && isAdmin){
        return <h2 style = {{color: 'red' , backgroundColor: "pink", display : 'inline-block'}}>Welcome Admin</h2>
    }
    else if (loggedIn && !isAdmin){
        return <h2 style = {htwostyles}>Welcome User</h2>
    }
  
}

export default UserStatus;