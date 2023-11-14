import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext2 } from "../../shop-context2";
import CartItem from "./cart-item";
import './cart.css'
const Cart = () => {
    const {cartItems}=useContext(ShopContext2)
    return ( 
    <>
    <div className="carts">
        <h1>your cart items</h1>
        <div className="cartitems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id]!==0){
                    return <div key={product.id}><CartItem data={product} number={cartItems[product.id]}/></div> 
                }
            })}
        </div>
    </div>
    </> );
}
 
export default Cart;