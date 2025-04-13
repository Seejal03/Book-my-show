import { useState } from "react";
import BsContext from "./BsContext";
const BsState=(props)=>{
    const [movie,changemovie]=useState('');
    const [time,setTime]=useState('');
    const [seatNumber, changeSeatNum]=useState({
        A1:'',
        A2:'',
        A3:'',
        A4:'',
        D1:'',
        D2:'',

    });
    const [lastBookingDet, setLastBookingDet]=useState(null);
    return (
        <BsContext.Provider value={{movie,changemovie,time,setTime,seatNumber,changeSeatNum,lastBookingDet,setLastBookingDet}}>{props.children}</BsContext.Provider>
    )
}
export default BsState;