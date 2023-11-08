import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className='card-wrapper'>
        <div className='card'>
            <div className='card-image-frame'>
                <img src='https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800' alt='album cover page'/>
            </div>
            <div className='card-pill'>
                <p >100 followers</p>
            </div>
            <div>

            </div>

        </div>
        <p className='card-label'>New English Songs</p>
    </div>
  )
}

export default Card