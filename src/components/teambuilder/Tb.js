import React from 'react'

export default function Tb() {
  return (
    <div className='card2 allCards'>
        <h4 className='cardTitle'>
          Team Builder
        </h4>
        <p className='cardText'> 
          Scans our talent network to create the optimal team for your project
        </p>
        <div className='image'>
          <img src={'/images/icon-team-builder.svg'} alt="" />
        </div>
    </div>
  )
}
