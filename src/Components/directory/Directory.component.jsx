import React from 'react'
// import { Router } from 'react-router-dom'
import "./Directory.styles.scss"
import Categoryitem from '../Category-item/Categoryitem'
export default function Directory({categories}) {
  return (
    <div className='directory-container'>
  {categories.map((category) => (
    <Categoryitem key={ category.key } category={category}/>
      
    
    
      ))}
    </div>
  )
}
