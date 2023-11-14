import {PRODUCTS} from '../../products'
import Product from './product';
import './shop.css'
const Shop = () => {
    return ( 
    <>
    <div className="shop">
        <div className="shopTitle">
            <h1>PedroTech Shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product)=>(<div className="cart" key={product.id}>
            <Product data={product}/>
            </div>))}
        </div>
    </div>
    </> );
}
 
export default Shop;