 
 import React from 'react'
 
 const Greeting = () => {
 const currentDate = new Date();

const currentYear = currentDate.getFullYear();
const currrentMonth = currentDate.getMonth() + 1;
const currenttDate = currentDate.getDate();
const currentHour = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();
const currentSeconds = currentDate.getSeconds();

const myName = "Lakshay Raj"

   return (
     <div>
        <div>
        <h1>Hey! I am the website owner {myName}.</h1>
        <p>Year: {currentYear} Month: {currrentMonth} Date: {currenttDate}</p>
        <p> Hour: {currentHour} Minutes: {currentMinutes} Seconds: {currentSeconds}</p>
        </div>
     </div>
   )
 }
 
 export default Greeting