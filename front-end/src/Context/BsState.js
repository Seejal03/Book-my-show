import { useState } from "react";
import BsContext from "./BsContext";
const BsState=(props)=>{
    const [movie,changemovie]=useState('')
    return (
        <BsContext.Provider value={{movie,changemovie}}>{props.children}</BsContext.Provider>
    )
}
export default BsState;