import React from 'react'
import { useContext } from 'react';
import "./shop.scss";
import Productcard from '../../Components/product-card/product-card.component';
import SHOP_DATA from '../../shop-data.json'
import { ProductContext } from '../../Context/products.context'
export default function Shop() {
  const {products}=  useContext(ProductContext);
  return (
    <div className='products-container'>
    {products.map((product)=>(
        <Productcard key={product.id} product={product}/>
    ))}
    </div>
  )
};
