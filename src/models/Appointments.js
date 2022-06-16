const mongoose = require('mongoose');

const Appointment = new mongoose.Schema(
    {
        date: Date,
        notes: String,
        emotional_data: [{
            angry: Number,
            disgust: Number,
            fear: Number,
            happy: Number,
            neutral: Number,
            sad: Number,
            surprise: Number
        }]
    },
    {
        timestamps: true
    }
);

export default Appointment;