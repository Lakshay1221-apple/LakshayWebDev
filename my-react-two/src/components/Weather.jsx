
import React from 'react'
// prop handling should be like js
const Weather = ({ temp }) => {

    if (temp < 15){
        return <h3>It's Cold Outside.</h3>
    }
    else if(temp >= 15 && temp < 25){
        return <h3>The Temperature is Good for a Walk.</h3>
    }
    else{
        return <h3>It's Hot Outside.</h3>
    }
  
}

export default Weather