const mongoose = require('mongoose');
import Appointment from "./Appointments";

const Patient = new mongoose.Schema({
    name: String,
    last_name: String,
    age: Number,
    gender: String,
    image: String,
    phone: Number,
    email: String,
    appointments: [Appointment]
});

export default Patient;