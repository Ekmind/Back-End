import User from "../models/User";
import { handleErrors } from "../errors/handler.error";

module.exports.create_appointment = async (req, res) => {
    const { date, notes } = req.body;
    try {
        const newAppointment = await User.updateOne(
            { _id: req.params.patient_id },
            {
                $push: {
                    "patients.$.appointments": [{
                        date: date,
                        notes: notes
                    }]
                }
            }
        );

        const user = await User.findOne({ "patients._id": req.params.patient_id });
        console.log(user);


        res.status(200).json({ message: 'Appointment created successfully', Appointment: newAppointment });
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors);
    }
}
