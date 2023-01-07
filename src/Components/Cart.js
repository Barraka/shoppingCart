import React, { useEffect, useState } from 'react'

function Cart(props) {
    //output used to generate the items or a default text if cart is empty
    const [output, setOutput] = useState('');
    let defaultOutput= (
        <div className='cartText'>
            Your cart is empty.<br/>
            Check out the different collections in the Shop section to look for good bargains.
        </div>
    );
    //Update it every time an item is modified
    useEffect(()=> {
        // setOutput(defaultOutput);
        const tempCart=props.cart;
        if(Object.keys(tempCart).length===0)setOutput(defaultOutput);
        else {
            let items=[];
            let subtotal=0;
            for(const item in props.cart) {
                let iPrice=props.cart;
                iPrice=iPrice[item].price;
                const iquantity=props.cart[item].quantity;
                subtotal+=parseFloat(iPrice)*iquantity;
                let tempItem= (
                    <div className='cartItem' key={item} data-id={item}>
                        <div className="cartImgWrapper">
                            <img src={props.cart[item].id}/>
                        </div>
                        <div className='cartPrice'>
                                {props.cart[item].price} $
                        </div>
                        <div className='controls'>
                            <div className='minusWrapper wrapper' onClick={remove}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 13v-2h14v2Z"/></svg>
                            </div>
                            
                            <div className='quantity'>
                                {props.cart[item].quantity}
                            </div>
                            <div className='plusWrapper wrapper' onClick={add}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>
                            </div>
                        </div>

                    </div>
                );
                items.push(tempItem);
            }
            setOutput(
                <div className='cartPage'>
                    <div className='cartHeader'>
                        <div className="totalText">Total: {subtotal.toFixed(2)} $</div>
                        <button className='checkout'>Proceed To Checkout</button>
                    </div>
                    
                    {items}
                </div>
            )
        }
    },[props.cart]);

    //Control functions
    function add(e) {
        const id=e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        props.setCart(prev=> {
            const tempCart={...prev};
            for(const item in tempCart) {
                if(item===id)tempCart[id].quantity+=1;
            }
            return tempCart;
        });
    }
    function remove(e) {
        const id=e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        props.setCart(prev=> {
            const tempCart={...prev};
            for(const item in tempCart) {
                if(item===id) {
                    tempCart[id].quantity-=1;
                    if(tempCart[id].quantity<=0)delete tempCart[id];
                }
            }
            return tempCart;
        });
    }

    return (
        <div className='cartSetion'>
            {output}
        </div>
        
    )
}

export default Cart