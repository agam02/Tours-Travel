
import express from 'express'
import { createBooking, getAllBooking } from './../controller/bookingController.js'
// import { verifyUser,verifyAdmin } from './../utils/verifyToken.js'
const router = express.Router()

router .post ('/', createBooking);
router .get('/:id', createBooking);
router .get ('/', getAllBooking);

export default router 