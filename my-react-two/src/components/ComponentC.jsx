import { Data , Data1} from '../App.jsx'
import {useContext} from "react";

import React from 'react'

const ComponentC = () => {

  const userName =useContext(Data)

  const Age = useContext(Data1)

  // this is how you return your data by using createContext
  // return (
  //   <Data.Consumer>
    
  //     {(name) => {
  //       return <div>
  //         <h1>My Name Is {name}</h1>
  //         <Data1.Consumer>
  //           {(age) => {
  //             return <p>I am {age} years old</p>
  //           }}
  //         </Data1.Consumer>
  //       </div>

  //     }}
  //   </Data.Consumer>
    
  // )
  // this is how you return your data by using useContext
  return(
    <h1>My name is {userName} and I am {Age} years old</h1>
  )
}

export default ComponentC;