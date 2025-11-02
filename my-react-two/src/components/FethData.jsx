
// this is how to fetch data using the use effect hook

import React from 'react'
import {useState, useEffect} from "react";


const FethData = () => {

    const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        )

      const data = await response.json()

      if (data && data.length) setData(data)
    }


    getData();
  }, []) 



  return (
    <div>
        <ul>
        {data.map(item => (
          <>
          <li key={item.id}>{item.title}</li>
          <li key={item.id}>Body--{item.body}</li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default FethData