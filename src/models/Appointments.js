const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        date: Date,
        notes: String,
        patient: {
            ref: 'Patient',
            type: mongoose.Schema.Types.ObjectId,
            unique: true
        },
        pending: {
            type: Boolean,
            default: true
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