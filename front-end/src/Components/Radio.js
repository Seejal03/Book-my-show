import React from 'react'
import '../CSS/radiocomponent.css'
const Radio = ({text}) => {
  return (
    <div className='form-check-label'>
        <span className='text'>{text}</span>
    </div>
  )
}

export default Radio