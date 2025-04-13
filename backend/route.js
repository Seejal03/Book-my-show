const express= require('express');
const router =express.Router();
const Ticket =require("./schema")
const cors=require("cors")
const app=express()

router.use(express.json());
router.use(cors())

router.post("booking",async(req, res)=>{
    const {movie,slot,seats}=req.body
    try {
        const mydata=new Ticket ({movie,slot,seats})

        const saved=await mydata.save()
        res.status(200).json({data:mydata,message :"Booking successful"})
    }catch(err){
        res.status(500).json({
            data:null,
            message:"something is wrong"
        })
    }
})

router.get("/booking",async(req,res)=>{
    try {
        const mydata=await Ticket.find().sort({id:-1}).limit(1)
        if(mydata.length==0){
            res.status(200).json({data:null, message:"no previous booking"})
        }else{
            res.status.json({data:mydata[0]})
        }
    }catch(err){
         res.status(500).json({data:null, message:"something went wrong!!"
         })
    }
})
module.export=router