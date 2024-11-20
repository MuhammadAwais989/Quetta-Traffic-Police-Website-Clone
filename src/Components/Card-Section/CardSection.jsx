import React from 'react'
import verify from '../../images/Verify.123cc5f85d298b449ecd.png'
import learner from '../../images/learnerPermit.a9121a5ce76ceade5226.png'
import permanent from '../../images/Permanent License.2aa0bb1fcd0b9f3e0ad5.png'
import international from '../../images/International.d6b774abc970659a1047.png'
import duplicatee from '../../images/Duplicate 2.d700aa89513028b6be7f.png'
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'

function CardSection() {
  return (
    <motion.div 
    variants={fadeIn("up", 0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0}}
    className='card-container'>
      
      <div className='first-card'>
        <img src={verify} alt="" />
        <h5>License Verification</h5>
        <div className="hover-div">
          <h5>LICENSE VERIFICATION</h5>
          <p>Get your verification through your CNIC number.</p>
          <a href="">Verification</a>
        </div>
      </div>
      <div className='first-card'>
        <img src={learner} alt="" />
        <h5>LEARNER PERMIT</h5>
        <div className="hover-div">
          <h5>LEARNER PERMIT</h5>
          <p>Find Out More About Requirements</p>
          <a href="">Get Info</a>
        </div>
      </div>
      <div className='first-card'>
        <img src={permanent} alt="" />
        <h5>PERMANENT LICENSE</h5>
        <div className="hover-div">
          <h5>PERMANENT LICENSE</h5>
          <p>Learn About Permanent License Criteria</p>
          <a href="">Get Info</a>
        </div>
      </div>
      <div className='first-card'>
        <img src={international} alt="" />
        <h5>INTERNATIONAL LICENSE</h5>
        <div className="hover-div">
          <h5>LICENSE VERIFICATION</h5>
          <p>Get Full Requirements for International License</p>
          <a href="">Get Info</a>
        </div>
      </div>
      <div className='first-card'>
        <img src={duplicatee} alt="" />
        <h5>DUPLICATE LICENSE</h5>
        <div className="hover-div">
          <h5>DUPLICATE LICENSE</h5>
          <p>Get Duplicate License Requirements</p>
          <a href="">Get Info</a>
        </div>
      </div>

    </motion.div>
  )
}

export default CardSection