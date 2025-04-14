import React, { useContext,useEffect } from 'react'
import { seats } from '../data'
import '../CSS/lastbooking.css'
import BsContext from '../Context/BsContext'
const LastBooking = () => {
const context=useContext(BsContext)
const { handleGetBooking, lastBookingDet } = context;
useEffect(() => {
  handleGetBooking(); 
}, []);
  return (
    <div className='main'>
    <h1 className='main-heading'> Last Booking Details</h1>{
      lastBookingDet ? (
    <>
        <div className='seats-container'>
      <p className='seats-header'>Seats</p>
      <ul className='seats-list'>
      {seats.map((seat, index) => ( 
        <li className='seats_val' key={index}>
          (seat):{Number(lastBookingDet.seats[seat])}
        </li>
      ))}
      </ul>
        </div>
         <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>{lastBookingDet.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBookingDet.movie}</span>
          </p>      
     </> 
      ):(
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )
}
    </div>
  )
}

export default LastBooking