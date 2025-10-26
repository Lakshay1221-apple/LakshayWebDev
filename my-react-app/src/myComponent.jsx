import React, {useState} from "react";

// function MyComponent() {

//     const [name, setName] = useState("guest");
//     const[age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(false);

//     const updateName = () => {
//         setName(" Lakshay Raj" );
        
//     }

//     const updateAge = () => {
//         setAge(age + 1);
//     }

    
//     const toggleisEmployed = () => {
//         setIsEmployed(!isEmployed);
//     }

//     return(
//         <div>
//             <p>Name:{name}</p>
//             <button onClick = {updateName}>Set Name</button>
//             <p>Age:{age}</p>
//             <button onClick = {updateAge}>Increment Age</button>
//             <p>Employed: {isEmployed ? "Yes" : "No"}</p>
//             <button onClick = {toggleisEmployed}>Toggle Employment Status</button>
//         </div>
//     )

// }

// export default MyComponent;

function MyComponent() {

    const [name, setName] = useState("Guest");

    const [quantity, setQuantity] = useState("0");

    const [comment, setComment] = useState("Hey, nice post!");

    const [payment, setPayment] = useState("0");

    const [shipping, setShipping] = useState("Standard");

    function handleNameChange(event){
        setName(event.target.value);
    }

    
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div className="component-container">
            <input value = {name} onChange = {handleNameChange} className = "input"/>
            <p className = "input-para">Name: {name}</p>
            <br/>
            <input value = {quantity} onChange = {handleQuantityChange} className = "input"/>
            <p  className = "input-para">Quantity: {quantity}</p>
            <br/>
            <textarea value = {comment} onChange = {handleCommentChange} className = "input"
            placeholder = "Enter the delivery details"/>
            <p  className = "input-para">Delivery Details: {comment}</p>
            <br/>
            <select value = {payment} onChange = {handlePaymentChange} className = "input">
                <option value = "">Select Payment Method</option>
                <option value = "credit card">Credit Card</option>
                <option value = "debit card">Debit Card</option>
                <option value = "paypal">Paypal</option>
            </select>
             <br/>
             <label>
                <input type = "radio" value = "Pick Up"
                       checked = {shipping === "Pick Up"}
                       onChange = {handleShippingChange}/>
                Pick Up

             </label><br></br>
             <label>
                <input type = "radio" value = "Delivery"
                       checked = {shipping === "Delivery"}
                       onChange = {handleShippingChange}/>
                Delivery

             </label>
             <p>Shipping: {shipping}</p>
           
            
        </div>
    );

}

export default MyComponent;

