import React from 'react'

const SearchField = () => {
  return (
    <div className='search'>
        <input className='searchfield' placeholder='Search a album of your choice' />
        <img alt='search icon' src='./searchicon' width={66} height={48}/>
    </div>
  )
}

export default SearchField