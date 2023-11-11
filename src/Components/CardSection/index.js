import React from 'react'
import Card from '../Card'
import './cardsection.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Cursole from '../Cursole'

const ENDPOINT = 'https://qtify-backend-labs.crio.do/'



const CardSection = ({ albums }) => {
  const [iscopplesed, setiscopplesed] = useState(false)
  const [card, setcard] = useState([]);

  const FetchCardData = async () => {
    const response = await fetch(`${ENDPOINT}albums/${albums}`)
    const fetchedData = await response.json()
    setcard(fetchedData)
    // console.log(card);
  }
  useEffect(() => {
    FetchCardData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='card-section'>
      <div className='cs-header'>
        <p className='cs-album-name'>{albums} Albums</p>
        <p className='cs-more'
        onClick={()=>{
          setiscopplesed(!iscopplesed)
        }}
        >{iscopplesed ? "show all" :"Collapas"}</p>
      </div>
        {
          iscopplesed ?
          <Card carddata={card} /> :
          <Cursole carddata={card} />
        }
    </div>

  )
}

export default CardSection