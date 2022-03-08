import React from 'react'
import './body.css'

export default function Body() {
  return (
    //first add image to the public folder
    // <img src={process.env.PUBLIC_URL + '/me.jpg'} alt="" />
    <div className='body'>
        <h2 className="headerText">Reliable, efficient delivery</h2>
        <h2>Powered by Technology</h2>
        <p className='cardText'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </div>
  )
}
