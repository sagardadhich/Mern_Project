import { useContext, useEffect } from "react";
import { userContext } from "./userContext";

function Cart() {

    const {cart}=useContext(userContext)

    console.log(cart);
  
        fetch('/api/cartdata',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({ids:Object.keys(cart.item)})
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
        })
        
    

    return ( 
        <>
        <h1>Cart</h1>
        </>
     );
}

export default Cart;