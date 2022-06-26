const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        date: Date,
        notes: String,
        patient: mongoose.Types.ObjectId,
        completed: {
            type: Boolean,
            default: false
        },
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
        timestamps: true,
        versionKey: false
    }
);

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment;