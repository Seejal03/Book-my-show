import React, { useContext } from 'react'
import { seats } from '../data'
import '../CSS/selectseat.css'
import SeatsInput from './SeatsInput'
import BsContext from '../Context/BsContext'
const SelectSeat = () => {
  const context=useContext(BsContext)
  const {seatNumber,changeSeatNum}=context
  return (
   
   <div className='Seats_wrapper'>
    <h1 className='seats-heading'>Select Seats: </h1>
    <div className='container'>
      {seats.map((el, index)=>{
        return (
          <SeatsInput key={index} text={el} seatNumber={seatNumber} changeSeatNum={changeSeatNum}/>
        )
      })}
    </div>
   </div>

  )
}

export default SelectSeat