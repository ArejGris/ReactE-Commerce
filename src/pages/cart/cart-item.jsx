import './cart.css'
import { ShopContext2 } from '../../shop-context2';
import { useContext } from 'react';
const CartItem = ({data,number}) => {
    const {id ,productName,price,productImg}=data
const {removeFromCart}=useContext(ShopContext2)
    return ( <div className="cart2">
       <div className="image">
       <img src={productImg} alt="" />
       </div> 
        <div className="info">
        <p>{productName}</p>
    <h3>${price}</h3>
        </div>
        <button onClick={()=>{removeFromCart(id)}}>delete item</button>
        <div className="number">{number}</div>
    </div> );
}
 
export default CartItem;