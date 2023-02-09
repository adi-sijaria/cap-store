import './checkout.scss';
import React from 'react'
import { CartContext } from '../../Context/cart.context';
import { useContext } from 'react';
import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
const Checkout = () => {
    const { cartItems, addItemToCart, removeItemToCart,CartTotal } = useContext(CartContext);

    return (
    
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>description</span>
                        
                    </div>
                    <div className='header-block'>
                         <span>quantity</span>
                        
                    </div>
                    <div className='header-block'>
                       <span>Price</span>
                    </div>
                    <div className='header-block'>
                    <span>Remove</span>
                    </div>
                </div>
            


           
           
            <div>
                {
                    cartItems.map((cartItem) => {
                        const { name, id, quantity } = cartItem;
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                        )
                        
                        
                    })
                }

            </div>
            <span className='total'>Total :${CartTotal}</span>

        </div>
    )
}

export default Checkout
