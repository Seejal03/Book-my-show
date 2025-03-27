import React from 'react'
import Radio from './Radio'
import "../CSS/selectslots.css"
import { slots } from '../data'
const Timings = () => {
  return (
    <>
    <div className='Slots_conatiner'>
      <h1 className='Slots_heading'>Select a slot</h1>
      <div className='slots'>
        {slots.map((element, index)=>{
        return (
          <Radio   text={element} />
        )
      })}</div>
    </div>
    </>
  )
}

export default Timings