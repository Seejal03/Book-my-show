const express=require("express")
const app=express()

const cors=require("cors")
const connectDB= require('./dbConnect')
const Ticket=require('./schema')

app.use(cors())
app.use(express.json())
connectDB()

app.use("/api",require("./route"));

app.listen(8080,()=>{
    console.log("server created")
})