import { useEffect, useState } from "react";
import BsContext from "./BsContext";
const BsState=(props)=>{
    const [errorPopup, setErrorPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [movie,changemovie]=useState('');
    const [time,setTime]=useState('');

    const [seatNumber, changeSeatNum]=useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
    });

    
    const [lastBookingDet, setLastBookingDet]=useState(null);
    const handlePostBooking=async()=>{
        const response= await fetch(`http://localhost:8080/api/booking`, {
            method:"POST",
            headers :{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({movie:movie, slot:time, seats:seatNumber})
        })
        const data= await response.json()
        setErrorPopup(true);
        setErrorMessage(data.message);
        if(response.status===200){
            changemovie("")
            
            setTime("")
            setLastBookingDet(data.data)
            window.localStorage.clear()
        }
    }

 const handleGetBooking=async()=>{
      const response =await fetch(
        `http://localhost:8080/api/booking`,{
            method:"Get",
        }
      )
      const data=await response.json()
      setLastBookingDet(data.data)
}
useEffect(()=>{
    const movie=window.localStorage.getItem("movie")
    const slot=window.localStorage.getItem("slot")
    const seats =JSON.parse(window.localStorage.getItem("seats"))
    if(movie){
        changemovie(movie)
    }
    if(slot){
        setTime(slot)
    }
    if(seats){
         changeSeatNum(seats)
    }
},[])

    return (
        <BsContext.Provider value={{movie,changemovie,time,setTime,seatNumber,changeSeatNum,lastBookingDet,setLastBookingDet,handleGetBooking,handlePostBooking,errorMessage,errorPopup,setErrorMessage,setErrorPopup}}>{props.children}</BsContext.Provider>
    )
}
export default BsState;