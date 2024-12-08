import React from 'react'
import mobflip from '../../images/mob-flip.ff77cdf3887789d799c5.png'
import vector from '../../images/vector.115b80534dbc9b6fb4ca.png'

function AppSection() {
  return (
    <div className='app-sec-cont'>

      <div className="app-sec-top">
      <div className='app-react-img'>
        <img src={mobflip} alt="" />
        <img src={vector} alt="" />
      </div>

      <div className='app-sec-heading'>
        <h1>Download Our App</h1>
        <span></span>
      </div>  

      <div className="top-right-img">
        <img src={vector} alt="" />
      </div>
      </div>

    </div>
  )
}

export default AppSection