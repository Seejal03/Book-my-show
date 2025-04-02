import React from 'react'
import { seats } from '../data'
import '../CSS/lastbooking.css'
const LastBooking = () => {
  return (
    <div className='main'>
    <h1 className='main-heading'> Last Booking</h1>
    <div className='seats-container'>
      <p className='seats-header'>Seats</p>
      <ul className='seats-list'>
      {seats.map((seat, index) => ( 
  <li className='seats_val' key={index}>
    {seat}:0
  </li>
))}


      </ul>
    </div>
    <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>00</span>
          </p>
          <p className="movie">
            Movie: <span>ABC</span>
          </p>      
    </div>
  )
}

export default LastBooking