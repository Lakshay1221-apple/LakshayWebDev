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
    },
 ]

 const [message, setMessage] = useState('Click the button');

 const handlClick = () => setMessage('The button has been clicked');


   return (
     <div>
        <h1>This is our user List</h1>
        <div>
             {userList.map(({ id, name, age }) => {
                const userProduct = ProductList.find(product => product.id === id);
                return (
                    <div key={id}>
                        <ol>
                            <li>ID : {id} , NAME : {name}, AGE: {age}</li>
                        </ol>
                        {userProduct && (
                            <>
                                <ul>
                                    <li>Product: {userProduct.product}, Price: {userProduct.price}</li>
                                </ul>
                                <hr />
                            </>
                        )}
                    </div>
                );
             })}
        </div>
        <button onClick={handlClick}>Click Me</button>
        {message && <h2>{message}</h2>}
     </div>
   )
 }
 
 export default UserList;