import React, { useContext } from 'react'
import SelectMovie from '../Components/SelectMovie'
import LastBooking from '../Components/LastBooking'
import Timings from '../Components/Timmimgs'
import SelectSeat from '../Components/SelectSeat'
import "../CSS/home.css"
import BsContext from '../Context/BsContext'

const Home = () => {
  const context=useContext(BsContext)
  const {
  movie,
  time,
  seatNumber,
  handlePostBooking,
  setErrorPopup,
  setErrorMessage

  }=context;


  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };

  //check whether all seats have input 0
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  const handleBookNow=()=>{
    if(!movie){
      setErrorPopup(true)
      setErrorMessage("Please select a movie")
    }else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    } else if (
      checkNegativeSeatsValidity(seatNumber) ||
      checkZeroSeatsValidity(seatNumber)
    ) {
      setErrorPopup(true);
      setErrorMessage("Invalid Seats!");
    } 
    else{
      handlePostBooking()
    }

  }
  return (
    <div className='container'>
      <div className='wrap'>
        <div className='select_movie_component'>
        <SelectMovie/>
        </div>
        <div className='Last_booking'>
          <LastBooking/>
        </div>
    </div>
    <div className='seat_booking'>
      <Timings/>
      <SelectSeat/>
      <button className='submit' onClick={handleBookNow} > Book Now</button>
    </div>
    </div>
    
  )
}

export default Home