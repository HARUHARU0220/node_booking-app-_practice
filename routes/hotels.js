import express from "express"
import Hotel from "../models/hotels.js";

const router = express.Router();

router.post("/", async (req,res) => {

    const newHotel = new Hotel(req.body)
    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)

    } catch (err) {
        res.status(500).json(err)
    }

})



export default router;
