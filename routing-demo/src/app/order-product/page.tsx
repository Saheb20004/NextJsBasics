"use client"
import { log } from "console";
import { useRouter } from "next/router";

export default function OrderProduct(){
    const router=useRouter();
    const handleClick=()=>{
        log("Placing your order")
        router.push("/")
    }
    return (
        <>
          <h1>Order Product</h1>
          <button onClick={handleClick} >Place Order</button>
        </>
    )
}