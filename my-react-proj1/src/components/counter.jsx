import {useState} from 'react';
import React from 'react'

const Counter = () => {

    const [count, SetCount] = useState(0);



  return (
    <div className="counter-container">
      <h1>{count}</h1>
      <div className="btns-container">
        <button onClick={() => SetCount(count + 1)} className="increment">
          +
        </button>
        <button onClick={() => SetCount(count - 1)} className="decrement">
          -
        </button>
        <button onClick={() => SetCount(0)} className="reset">Reset</button>
      </div>
    </div>
  )
}

export default Counter;