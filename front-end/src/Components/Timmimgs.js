import React, { useContext } from 'react'
import Radio from './Radio'
import "../CSS/selectslots.css"
import { slots } from '../data'
import BsContext from '../Context/BsContext'
const Timings = () => {
  const context=useContext(BsContext)
  const {time,setTime} =context
  const handleChangeTime=(val)=>{
  setTime(val)
  window.localStorage.setItem("slots",val)
  };
  return (
    <>
    <div className='Slots_conatiner'>
      <h1 className='Slots_heading'>Select a slot</h1>
      <div className='slots'>
        {slots.map((element, index)=>{
        return (
          <Radio  text={element} key={index} data={time}  changeSelection={handleChangeTime}/>
        )
      })}</div>
    </div>
    </>
  )
}

export default Timings