import { createContext, useState } from "react"
import { PRODUCTS } from "./products"


export const ShopContext2=createContext(null)
const getcartDefault=()=>{
    let cart={}
for(let i=0;i<PRODUCTS.length;i++){
    cart[i]=0
}
return cart
}
export const ShopContext2Provider=({children})=>{
const [cartItems,setCartItems]=useState(getcartDefault())
const addToCart=(id)=>{
    setCartItems((prev)=>({...prev,[id]:prev[id]+1}))
}
const removeFromCart=(id)=>{
    setCartItems((prev)=>({...prev,[id]:prev[id]-1}))
}
const contextValue={cartItems,addToCart,removeFromCart}
    return (
    <ShopContext2.Provider value={contextValue}>
        {children}
        </ShopContext2.Provider>)
}