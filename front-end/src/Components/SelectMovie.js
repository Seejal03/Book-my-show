import React from 'react'
import { movieList } from '../data'
import Radio from './Radio'
import '../CSS/selectMovie.css'
const SelectMovie = () => {
  return (
    <>
        <h1 className= 'SM_heading'>Select a movie</h1>
        <div className='SM_maincontainer'>
     {movieList.map((element, index)=>{
        return (
            <Radio text ={element} key={index}/>
        )
     })}
     </div>
    </>
  )
}

export default SelectMovie