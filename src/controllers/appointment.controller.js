import { handleErrors } from "../errors/handler.error";
import Appointment from "../models/Appointments";
import Patient from "../models/Patient";

//Create Appointment
module.exports.create_appointment = async (req, res) => {
    const { date, notes, emotional_data } = req.body;

    try {
        const patient = await Patient.findById({ _id: req.params.patient_id });

        if (patient) {
            try {
                const newAppointment = await Appointment.create({ date: date, notes: notes, patient: patient.id, emotional_data: emotional_data });
                const addAppointment = await Patient.findByIdAndUpdate(
                    { _id: patient.id },
                    {
                        $push: { appointments: newAppointment._id }
                    },
                    { new: true }
                );

                console.log({ message: 'Appointment created successfully', Appointment: newAppointment, Patient: addAppointment });
                res.status(200).json({ message: 'Appointment created successfully', Appointment: newAppointment });
            } catch (err) {
                const errors = handleErrors(err);
                console.log({ message: 'Appointment could not be created', error: errors });
                res.status(400).json({ Error: 'Appointment could not be created' });
            }
        }
    } catch (err) {
        handleErrors(err);
        console.log({ message: 'Patient not found' });
        res.status(404).json({ Error: 'Patient not found' });
    }
}

//Update Appointment
module.exports.update_appointment = async (req, res) => {
    const { date, notes } = req.body;
    try {
        const appointment = await Appointment.findById({ _id: req.params.appointment_id });
        if (appointment) {
            try {
                const updatedAppointment = await Appointment.findOneAndUpdate(
                    { _id: appointment.id },
                    { date: date, notes: notes },
                    { new: true }
                );

                console.log('Appointment Updated:', updatedAppointment);
                return res.status(200).json({ message: 'Appointment updated', appointment: updatedAppointment });
            } catch (err) {
                const errors = handleErrors(err);
                console.log({ message: 'Appointment could not be updated' });
                return res.status(400).json({ Error: 'Appointment could not be updated' });
            }
        }

        console.log('Patient does not exist');
        res.status(400).json({ Error: 'Patient does not exist' });
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ message: 'Valid ObjectId missing' });
        res.status(400).json({ Error: 'Valid ObjectId missing' });
    }

}

//Delete Appointment
module.exports.delete_appointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById({ _id: req.params.appointment_id });
        if (appointment) {
            try {
                const removeAppointment = await Patient.findOneAndUpdate(
                    { _id: appointment.patient },
                    {
                        $pull: { appointments: appointment._id }
                    },
                    { new: true }
                );

                const deletedAppointment = await Appointment.deleteOne({ _id: appointment.id });

                console.log({ message: 'Appointment deleted', Appointment: deletedAppointment, Patient: removeAppointment });
                return res.status(200).json({ message: 'Appointment deleted', Appointment: deletedAppointment });
            } catch (err) {
                handleErrors(err);
                console.log({ message: 'Appointment could not be deleted' });
                return res.json({ Error: 'Appointment could not be deleted' });
            }
        }

        console.log({ message: 'Patient does not exist' });
        res.status(400).json({ Error: 'Patient does not exist' });
    } catch (err) {
        handleErrors(err);
        console.log({ Error: 'Valid ObjectId missing' });
        res.json({ Error: 'Valid ObjectId missing' });
    }
}

//Set Appointment as Completed
module.exports.set_as_completed = async (req, res) => {
    try {
        const appointment = await Appointment.findById({ _id: req.params.appointment_id });
        if (appointment) {
            try {
                const completed = await Appointment.findByIdAndUpdate(
                    { _id: appointment._id },
                    {
                        $set: { pending: false }
                    },
                    { new: true }
                );

                const completedPatient = await Patient.findByIdAndUpdate(
                    { _id: appointment.patient },
                    {
                        $pull: { appointments: appointment._id }
                    },
                    { new: true }
                );

                console.log({ message: 'Appointment completed', pending: completed.pending });
                return res.status(200).json({ message: 'Appointment completed', pending: completed.pending });

            } catch (err) {

                handleErrors(err);
                console.log({ Error: 'Appointment could not be set as completed' });
                return res.json({ Error: 'Appointment could not be set as completed' });

            }
        }

        console.log({ message: 'Appointment not found' });
        res.status(404).json({ message: 'Appointment not found' });

    } catch (err) {

        handleErrors(err);
        console.log({ Error: 'Valid ObjectId missing' });
        res.json({ Error: 'Valid ObjectId missing' });

    }
}

//Set to pending
module.exports.set_to_pending = async (req, res) => {
    try {
        const appointment = await Appointment.findById({ _id: req.params.appointment_id });
        const patient = await Patient.findById({ _id: appointment.patient });
        if (appointment) {
            try {
                const pending = await Appointment.findByIdAndUpdate(
                    { _id: appointment._id },
                    {
                        $set: { pending: true }
                    },
                    { new: true }
                );

                const pendingPatient = await Patient.findByIdAndUpdate(
                    { _id: appointment.patient },
                    {
                        $push: { appointments: appointment._id }
                    },
                    { new: true }
                );

                pendingPatient.save();

                console.log({ message: 'Appointment pending', pending: pending.pending });
                return res.status(200).json({ message: 'Appointment pending', pending: pending.pending });

            } catch (err) {

                handleErrors(err);
                console.log({ Error: 'Appointment could not be set to pending' });
                return res.json({ Error: 'Appointment could not be set to pending' });

            }
        }

        console.log({ message: 'Appointment not found' });
        res.status(404).json({ message: 'Appointment not found' });

    } catch (err) {

        handleErrors(err);
        console.log({ Error: 'Valid ObjectId missing' });
        res.json({ Error: 'Valid ObjectId missing' });

    }
}

//Insert Emotional Data
module.exports.insert_data = async (req, res) => {
    const { angry, disgust, fear, happy, neutral, sad, surprise } = req.body;
    try {
        const appointment = await Appointment.findById({ _id: req.params.appointment_id });
        if (appointment) {
            try {
                const insert = await Appointment.findByIdAndUpdate(
                    { _id: appointment._id },
                    {
                        $push: {
                            emotional_data: {
                                angry: angry,
                                disgust: disgust,
                                fear: fear,
                                happy: happy,
                                neutral: neutral,
                                sad: sad,
                                surprise: surprise
                            }
                        }
                    },
                    { new: true }
                );

                console.log({ message: 'Emotional data inserted', appointment: insert.emotional_data });
                return res.json({ message: 'Emotional data inserted', appointment: insert.emotional_data });

            } catch (err) {

                handleErrors(err);
                console.log({ Error: 'Data could not be inserted' });
                res.json({ Error: 'Data could not be inserted' });

            }

        }

        console.log({ Error: 'Appointment not found' });
        res.status(404).json({ Error: 'Appointment not found' });

    } catch (err) {

        handleErrors(err);
        console.log({ Error: 'Valid ObjectId missing' });
        res.json({ Error: 'Valid ObjectId missing' });

    }
}

module.exports.get_all_appointments = async (req, res) => {
    try {

        const sessions = await Patient.findById({ _id: req.params.patient_id }).populate('appointments');
        res.status(200).json({ message: "Sessions found!", sessions: sessions.appointments })

    } catch (err) {
        errors = handleErrors(err);
        console.log({ message: 'No sessions found', Error: errors });
        res.json({ Error: 'No sessions found' });
    }
}