import React from 'react'
import './OtherPageCards.css'

function ProductCards(props) {
  return (
    <div className='ProductCards'>

      <div className='imageBox'>
        <img className='imgProduct' src={props.src} alt={props.alt}></img>
      </div>
      
      <div className='productInfobox'>
        <h4>{props.text}</h4>
        <p>{props.para}</p>

      </div>

    </div>

  )
}

export default ProductCards;