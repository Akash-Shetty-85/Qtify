import React from 'react'
import Card from '../Card'
import './cardsection.css'
import { useState } from 'react'
import { useEffect } from 'react'

const ENDPOINT ='https://qtify-backend-labs.crio.do/'
const CardSection = ({albums}) => {
    const[card,setcard] = useState([]);

    const FetchCardData = async ()=>{
        const response = await fetch(`${ENDPOINT}albums/${albums}`)
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
                    <p className='cs-album-name'>{albums} Albums</p>
                    <p className='cs-more'>Collapse</p>
        </div>

        <Card carddata={card}/>
    </div>
    
  )
}

export default CardSection