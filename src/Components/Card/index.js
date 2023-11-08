import React from 'react'
import './Card.css'
const Card = (props) => {

  console.log(props.carddata);
  const cardsData = props.carddata;
  return (
    <>
    <div className='cs-section'>

      {
        cardsData.map((carddata)=>(
            
          <div className='card-wrapper'>
          <div className='card'>
            <div className='card-image-frame'>
              <img src={carddata.image} alt='album cover page' />
            </div>
            <div className='card-pill'>
              <p>{carddata.follows} Follows</p>
            </div>
          </div>
          <p className='card-label'>{carddata.title}</p>
          </div>
            
        
        ))
      }
    </div>
    </>

  )
}

export default Card