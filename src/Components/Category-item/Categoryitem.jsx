import React from 'react'
import { ReactPropTypes } from 'react'
import "./categoryitem.scss"
export default function Categoryitem({category}) {
  return (
    <div className='category-container'>
        <div className='background-image' style={{backgroundImage:`url(${category.url})`}}/>
        <div className='category-body-container'>
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    
  )
}
