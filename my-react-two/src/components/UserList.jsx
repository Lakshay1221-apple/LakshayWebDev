 import React, { useState } from 'react'
 
 const UserList = () => {

    const userList = [
        {
            id : "1",
            name : "Jordan",
            age : "12"
        },
        {
            id: "2",
            name: "Alex",
            age: "13",
        },
        {
            id: "3",
            name : "Rose",
            age : "12"
        }
    ]

   const ProductList = [
    {
        id : "1",
        product: "Laptop",
        price: "$699"
    },
    {
        id : "2",
        product: "Phone",
        price: "$399"
    },
    {
        id : "3",
        product: "Headphones",
        price: "$99"
    } 
 ]

 const [message, setMessage] = useState('Click the button');

 const handleClick = () => setMessage('The button has been clicked');


   return (
     <div>
        <h1>This is our user List</h1>
        <ol>
            {userList.map(({ id, name, age }) => {
            const userProduct = ProductList.find(product => product.id === id);
            return (
                <li key={id}>
                    <div>
                        ID : {id} , NAME : {name}, AGE: {age}
                    </div>
                    {userProduct && (
                        <>
                            <ul>
                                <li>Product: {userProduct.product}, Price: {userProduct.price}</li>
                            </ul>
                        </>
                    )}
                </li>
            ); 
            })}
        </ol>
        <button onClick={handleClick}>Click Me</button>
        {message && <h2>{message}</h2>}
     </div>
   )
 }
 
 export default UserList;