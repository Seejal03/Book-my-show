import React from 'react'
import { seats } from '../data'
import '../CSS/selectseat.css'
import SeatsInput from './SeatsInput'
const SelectSeat = () => {
  return (
   
   <div className='Seats_wrapper'>
    <h1 className='seats-heading'>Select Seats: </h1>
    <div className='container'>
      {seats.map((el, index)=>{
        return (
          <SeatsInput key={index} text={el}/>
        )
      })}
    </div>
   </div>

  )
}

export default SelectSeat