import { handleErrors } from "../errors/handler.error";
import Appointment from "../models/Appointments";
import Patient from "../models/Patient";

//Create Appointment
module.exports.create_appointment = async (req, res) => {
    const { date, notes } = req.body;

    try {
        const patient = await Patient.findById({ _id: req.params.patient_id });

        if (patient) {
            try {
                const newAppointment = await Appointment.create({ date: date, notes: notes, patient: patient.id });
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
        res.status(400).json({ Error: 'Patient not found' });
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
                return res.status(400).json('Error: Appointment could not be updated');
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

//Deactivate Appointment