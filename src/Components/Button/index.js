import React from 'react'

const Button = ({children}) => {
  return (
    <div>
        <button className='feedback_button'>{children}</button>
    </div>
  )
}

export default Button