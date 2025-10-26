import React, {useState} from "react";

function Car(){
    const [car, SetCar] = useState({year: 2025,
                                    make: "Ford",
                                    model: "Mustang"})

    function handleYearChange(event){
        SetCar({...car, year: event.target.value});
    }

    function handleMakeChange(event){
        SetCar({...car, make: event.target.value});
    }

    function handelModelChange(event){
        SetCar({...car, model: event.target.value});
    }
                                
    return(
        <div>
            <p>Your Favourite Car is: {car.year} {car.make} {car.model}</p>

            <input type = "number" value = {car.year} onChange = {handleYearChange} /><br></br>
            <input type = "text" value = {car.make} onChange = {handleMakeChange} /><br></br>
            <input type = "text" value = {car.model} onChange = {handelModelChange} /><br></br>
        </div>
    )

    

}

export default Car;