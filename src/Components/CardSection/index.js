import React from 'react'
import Card from '../Card'
import './cardsection.css'
import { useState } from 'react'
import { useEffect } from 'react'
const CardSection = () => {
    const[card,setcard] = useState([]);

    const FetchCardData = async ()=>{
        const response = await fetch('https://qtify-backend-labs.crio.do/albums/top')
        const fetchedData = await response.json()
        setcard(fetchedData)
        // console.log(card);
    }
    useEffect(() => {
        FetchCardData()
    },[])
    

  return (
    <div className='card-section'>
        <div className='cs-header'>
                    <p className='cs-album-name'>Top Albums</p>
                    <p className='cs-more'>Collapse</p>
        </div>

        <Card carddata={card}/>
    </div>
    
  )
}

export default CardSection