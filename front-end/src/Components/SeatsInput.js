import React from 'react'
import '../CSS/seatsInput.css'

const SeatsInput = ({key,text ,seatNumber,changeSeatNum}) => {
  const change_seat=(v)=>{
  changeSeatNum({...seatNumber,[v.target.name]:Number(v.target.value)})
  window.localStorage.setItem("seats",
    JSON.stringify({...seatNumber,[v.target.name]:Number(v.target.value)})
  )
  }
  return (
    <div className='form-check-label seats'>
        <span className='text'>{text}</span>
        <input type='number' className='seats-input' placeholder='0' max='30' min='0' name={text} onChange={change_seat} value={seatNumber[text]}/>
    </div>
  )
}

export default SeatsInput

