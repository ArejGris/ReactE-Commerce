import { useState } from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Cart from './pages/cart/cart'
import Shop from './pages/shop/shop'
import { ShopContext2Provider } from './shop-context2'
function App() {

  return (
    <ShopContext2Provider>
    <Router>
    <div className="App">
    <Navbar />
    <div className="content">
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
    </div>

    </div>
    </Router>
    </ShopContext2Provider>
  )
}

export default App
