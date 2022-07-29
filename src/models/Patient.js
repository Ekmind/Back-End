const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    age: Number,
    gender: String,
    image: String,
    phone: Number,
    email: String,
    doctor: mongoose.Types.ObjectId,
    isActive: { type: Boolean, default: true },
    appointments: [{
        ref: 'Appointment',
        type: mongoose.Types.ObjectId,
    }]
}, {
    timestamps: true,
    versionKey: false
});

// patientSchema.pre('deleteOne', async function (next) {
//     const remove = await User.findOne(
//         { _id: this._id }
//     );
//     console.log('usuario:', remove)
//     next();
// })


const Patient = mongoose.model('Patient', patientSchema);

export default Patient;