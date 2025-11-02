import React from 'react';
import { useRef } from 'react';

const UseReff = () => {

    const inputElement = useRef(null)
    console.log(inputElement)

    const focusInput = () => {
        inputElement.current.focus()

        inputElement.current.value = "Jhon Snow"
    }

  return (
    <div>
        <input type = "text" ref = {inputElement}/>
        <button onClick = {() => focusInput()}>Focus and write Jhon Snow</button>
        
    </div>
  )
}

export default UseReff;