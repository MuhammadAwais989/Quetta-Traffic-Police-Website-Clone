import React from 'react'
import { Link } from 'react-router-dom'

export function Service() {
    

    return (
        <>
            <div className='service-container'>
                <div className="service-heading">
                    <p>Our Service</p>
                    <div className="ser-card-cont">
                        <Link to="/" className='card1'>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
