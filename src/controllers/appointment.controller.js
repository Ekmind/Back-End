import { handleErrors } from "../errors/handler.error";
import Appointment from "../models/Appointments";
import Patient from "../models/Patient";

//Create Appointment
module.exports.create_appointment = async (req, res) => {
    const { date, notes } = req.body;

    try {
        const patient = await Patient.findById({ _id: req.params.patient_id });
        const appointment = { date: date, notes: notes, patient: patient.id };
        if (patient) {
            try {
                const newAppointment = await Appointment.create(appointment);

                res.status(200).json({ message: 'Appointment created successfully', Appointment: newAppointment });
            } catch (err) {
                const errors = handleErrors(err);
                console.log({ message: 'Appointment could not be created', error: errors });
                res.status(400).json({ Error: 'Appointment could not be created' });
            }
        }
    } catch (err) {
        handleErrors(err);
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

}