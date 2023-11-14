import { useContext } from 'react';
import './shop.css'
import { ShopContext2 } from '../../shop-context2';
const Product = ({data}) => {
    const {id ,productName,price,productImg}=data
    const {addToCart,cartItems} =useContext(ShopContext2)
    const cartItemNumber=cartItems[id]
    return ( <>
    <h4>{productName}</h4>
    <p>${price}</p>
       <div className="image">
        <img src={productImg} alt="" />
        </div>
        
        <button className="addToCart" onClick={()=>addToCart(id)}>Add To Cart{cartItemNumber>0 &&<>({cartItemNumber})</> }</button>
        </> );
}
 
export default Product;