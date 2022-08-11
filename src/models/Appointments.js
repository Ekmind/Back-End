const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        date: String,
        notes: String,
        patient: {
            ref: 'Patient',
            type: mongoose.Schema.Types.ObjectId,
        },
        pending: {
            type: Boolean,
            default: true
        },
        emotional_data: []
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Appointment = mongoose.model('Appointment', appointmentSchema)

export default Appointment;