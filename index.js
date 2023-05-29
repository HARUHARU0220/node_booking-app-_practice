import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import hotelsRoute from "../Booking App_Practice/routes/hotels.js"


const app = express()

dotenv.config()

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB.")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () =>{
    console.log("mongoDB disconnected!")
})

// middleware

app.use(express.json());
app.use("/hotels", hotelsRoute);



app.listen(9999, () => {
    connect()
    console.log("connected to backend.");
});


