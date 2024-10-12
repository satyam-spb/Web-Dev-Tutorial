// onChange event handler : triggers a fnc everytime the input value changes. mainly used with <input> <textarea> <radio> <select> 

import { useState } from "react";

function MyComponent2(){
    const [name,setName] = useState('');
    // NOTE : const [name,setName] = useState(); Causes warning cuz : name is not initialized by setName it's value is managed by dom(Uncontrolled component)  and when it's value is changed by useState it becomes a (controlled component). when a component is switched from uncontrolled to controlled or vice versa it causes unpredictable behaviour. So best to initialize with ''
    const [quantity,setQuantity] = useState(1);
    // initial value of quantity is 1 cuz we're making the checkout pg of order, so generally ppl order 1 item 
    const [comment,setComment] = useState('');
    const [payment,setPayment] = useState('');
    const [shipping,setShipping] = useState('Delivery');

    function handleInputChange(e) { 
        // e refers to an event 
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }
    function handleCommentChange(e){
        setComment(e.target.value);
    }
    function handlePaymentChange(e) { 
        setPayment(e.target.value);
    }
    function handleShippingChange(e) { 
        setShipping(e.target.value);
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleInputChange} placeholder="Enter Your name" />
            {/* // When the user types into the input field, its value is immediately reflected in value field of input
// The onChange event captures user input and updates the component's state (name).
// After state update, the input field's value attribute is set to the updated state value,
// ensuring synchronization between UI and state. ie input's value field is updated again with the same value . Code will work even if "value={name}" isn't written but may have unexpected errors idk. U'll find it's use in nxt input (ie ) value={quantity}*/}


            <p>Welcome {name} </p>
            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>No. of items : {quantity} </p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Chacha koi delivery instruction? "></textarea>
            <p>Comment : {comment} </p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="UPI">UPI</option>
                <option value="Cash">Cash</option>
            </select>
            <p>Payment : {payment} </p>
            <label >
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up 
                <br />
            </label>
            <label >
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery 
            </label>
            <p>Shipping : {shipping} </p>
        </div>
        
    );
}
export default MyComponent2