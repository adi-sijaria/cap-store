import './product-card.scss';
import React from 'react'
import Button from '../button-component/button.component';
import "./product-card.scss"
import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
const Productcard= ({product}) => {
  
    const{name,price,imageUrl}=product;
    const{addItemToCart}=useContext(CartContext);
    const addProductToCart=()=>addItemToCart(product);
  return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
        <span classname='name'>{name}</span>
        <span classname='price'>{price}</span>
        </div>
      
        <Button buttonType='inverted'onClick={addProductToCart}> Add to card</Button>
    </div>
  )
  
}

export default Productcard
