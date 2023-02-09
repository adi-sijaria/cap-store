import "./cart-icon.style.scss";
import React from 'react'
import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";


export const CartIcon= () => {
  const {isCartOpen,setIsCartOpen,cartItems}=useContext(CartContext);
  const toogleIsCartOpen=()=>setIsCartOpen(!isCartOpen);
  let Quantity=0;
  cartItems.map((cartitem)=>Quantity=Quantity+cartitem.quantity);
  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen} >
       <ShoppingIcon className='shopping-icon'/>
       <span className="item-count">{Quantity}</span>
    </div>
    
  )
}
