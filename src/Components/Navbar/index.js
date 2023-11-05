import React from 'react'
import './navbar.css'
import Logo from '../Logo'
import SearchField from '../SearchField'
import Button from '../Button'

const index = () => {
  return (
    <div className='navbar'>
       <Logo/>
       <SearchField/>
       <Button/>
    </div>

  )
}

export default index