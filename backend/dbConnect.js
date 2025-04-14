const mongoose= require('mongoose')
const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/bookmyshow');
        console,log("connected to DB")
    } catch(err){
        console.log(err)
    }
}
module.exports=connectDB