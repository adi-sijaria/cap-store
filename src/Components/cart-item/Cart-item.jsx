import './Cart-item.scss'
import React from 'react'

export const CartItem = ({cartItem}) => {
  const {name,quantity,imageUrl,price}=cartItem;

  return (
    <div className='cart-item-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} *${price}</span>
        </div>
       
       
    </div>
  )
}

