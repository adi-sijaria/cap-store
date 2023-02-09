import "./cart-dropdown.style.scss"
import React from 'react'
import Button from "../button-component/button.component"
import { CartItem } from "../cart-item/Cart-item"
import { useContext } from "react"
import { CartContext } from "../../Context/cart.context"
import { useNavigate } from "react-router-dom"
const CardDropdown = () => {
  const {cartItems}=useContext(CartContext);
  const navigate=useNavigate();
  const goToCheckoutHandler=()=>{
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map(item =><CartItem key={item.id} cartItem={item}/>)}
        </div>
      
        <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>

      
    </div>
  )
}

export default CardDropdown
