import React, { useContext } from 'react'
import { movieList } from '../data'
import Radio from './Radio'
import '../CSS/selectMovie.css'
import BsContext from '../Context/BsContext'
const SelectMovie = () => {
  const context=useContext(BsContext);
  const {movie,changemovie}=context;
  const handleChangemovie=(val)=>{
    changemovie(val)
    window.localStorage.setItem("movie",val)
  }
  return (
    <>
        <h1 className= 'SM_heading'>Select a movie</h1>
        <div className='SM_maincontainer'>
     {movieList.map((element, index)=>{
        return (
            <Radio text ={element} key={index} data={movie} changeSelection={handleChangemovie}/>
        )
     })}
     </div>
    </>
  )
}

export default SelectMovie