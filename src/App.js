import React, { useContext, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Shop from './Components/Shop'
import './App.css';
import Cart from './Components/Cart'
import Ape from './Components/Ape'
import Derp from './Components/Derp'
import Aqua from './Components/Aqua'

const App = () => {
    const [shoplevel, setShoplevel] = useState(0);
    const [cart, setCart] = useState({});

    return (            
            <div className='App'>
                <Nav setShoplevel={setShoplevel} cart={cart} setCart={setCart}/>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
                    <Route path="/shop" element={<Shop shoplevel={shoplevel} setShoplevel={setShoplevel}/>} >
                        <Route path="/shop/chilledkongs" element={<Ape  cart={cart} setCart={setCart}/>}/>
                        <Route path="/shop/derpbirds" element={<Derp  cart={cart} setCart={setCart}/>}/>
                        <Route path="/shop/aquafarmers" element={<Aqua  cart={cart} setCart={setCart}/>}/>
                    </Route>
                    
                </Routes>
            
            </div>
        
    )
}

export default App