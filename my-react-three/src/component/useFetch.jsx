// this is the custom hook to fetch data like a tool just put the url and fetch

import {useState, useEffect} from "react";

import React from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)

    useEffect (() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [url])

    


  return [data]
   
}

export default useFetch;