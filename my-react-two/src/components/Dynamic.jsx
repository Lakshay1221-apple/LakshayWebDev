import React from 'react'

const Dynamic = () => {

  const myName = "Lakshay Raj"

  const multiply = (a, b) => a *b;

  const specialClass = "simple-class"

  return (
    <div>
        <p>2 + 2 = {2+2}</p>
        <h4>Hey! I am {myName}</h4>
        <p>My Friends List: {["Alex", "Rose", "Jackson"].join(", ")}</p>
        <p>2 * 3 = {multiply(2, 3)}</p>
        <p className = {specialClass}>This is a Special Class</p>
    </div>
  )
}

export default Dynamic