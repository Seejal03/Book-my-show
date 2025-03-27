import React from 'react'
import SelectMovie from '../Components/SelectMovie'
import LastBooking from '../Components/LastBooking'
import Timings from '../Components/Timmimgs'
import SelectSeat from '../Components/SelectSeat'
import "../CSS/home.css"

const Home = () => {
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
      <button className='submit'> Book Now</button>
    </div>
    </div>
    
  )
}

export default Home