import React from 'react'
import DigitalLicsence from '../../images/DigitalLicense-service.e6fd643a5b1a7d452bc8.gif'
import Challan from '../../images/Mobile-App-ser.15e690cf0a7ae4d2afc5.gif'
import MobileApp from '../../images/e-challan-service.cec772e071358e8a8834.gif'
// import { useNavigate } from 'react-router-dom'

export function Service() {
    // const navigate = useNavigate();
    return (
        <>
            <div className='service-container'>
                <div className="service-heading">
                    <p>Our Service</p>
                    <div className="ser-card-cont">

                        <div className='ser-card-1'>
                            <div className="corner"  >
                            →
                            </div>
                            <div className="ser-card-img">
                                <img src={DigitalLicsence} alt="" />
                                <span>Digital Licsence</span>
                                <p>We use handheld devices with thermal printing for seamless challan recording. Our system features end-to-end tracking for accuracy, efficiency, and transparency, enhancing issuance speed and accountability.</p>
                            </div>
                        </div>
                        <div className='ser-card-1'>
                            <div className="corner" href="#">
                            →
                            </div>
                            <div className="ser-card-img">
                                <img src={Challan} alt="" />
                                <span>E-Challam/Fine</span>
                                <p>We specialize in computerized driving licenses with cutting-edge security measures like secret codes and advanced laser engraving. Our commitment ensures authenticity and security, offering a reliable solution for modern identification needs.</p>
                            </div>
                        </div>
                        <div className='ser-card-1'>
                            <div className="corner" href="#">
                            →
                            </div>
                            <div className="ser-card-img">
                                <img src={MobileApp} alt="" />
                                <span>Mobile App</span>
                                <p>Introducing our mobile app on the Google App Store. Empowering the public with a user-friendly platform to track services. Monitor licenses, challans, and more for a comprehensive and convenient solution.</p>
                            </div>
                        </div>
                       
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
