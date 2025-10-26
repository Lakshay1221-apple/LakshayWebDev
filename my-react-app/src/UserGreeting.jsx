import PropTypes from 'prop-types';

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please login to continue</h2>
    // }
// this is the example of ternary operator in java script
    return(props.isLoggedIn ? <h2 className = "welcome-message">Welcome {props.username}</h2>:
                              <h2 className = "login-message">Please login to continue</h2>); 

           
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Default User",
}

export default UserGreeting;