import React from 'react'

const SearchField = () => {
  return (
    <div className='search'>
        <input className='searchfield' placeholder='Search a album of your choice' />
        <img alt='searchicon' src='./searchicon.png' width={66} height={48} className='searchicon'/>
    </div>
  )
}

export default SearchField