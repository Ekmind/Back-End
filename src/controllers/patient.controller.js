import User from "../models/User";
import { handleErrors } from "../errors/handler.error";
import Patient from "../models/Patient";

//Create Patient
module.exports.create_patient = async (req, res) => {
    const doctor = await User.findById({ _id: req.userId });

    const { name, last_name, age, gender, image, phone, email } = await req.body
    const patient = {
        name: name,
        last_name: last_name,
        age: age,
        gender: gender,
        image: image,
        phone: phone,
        email: email,
        doctor: doctor._id
    }

    try {
        const newPatient = await Patient.create(patient);

        const updateDoctor = await User.updateOne(
            { _id: req.userId },
            {
                $push: { patients: newPatient._id }
            }
        );

        console.log(updateDoctor)

        res.status(200).json({ message: 'Patient created', patients: newPatient })
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}

//Update Patient Credentials
module.exports.update_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = req.body
    try {
        const patient = await Patient.findById({ _id: req.params.patient_id });
        if (patient) {
            try {
                const updatedPatient = await Patient.updateOne(
                    { _id: patient.id },
                    {
                        name: name,
                        last_name: last_name,
                        age: age,
                        gender: gender,
                        image: image,
                        phone: phone,
                        email: email
                    }
                );

                res.status(200).json({ message: 'Patient updated', patients: updatedPatient })
            } catch (err) {
                const errors = handleErrors(err);
                console.log({ message: 'Patient could not be updated' });
                res.json({ Error: 'Patient could not be updated' });
            }
        }
    } catch (err) {

    }
}

//Delete Patient
module.exports.delete_patient = async (req, res) => {
    const patient = req.params.patient_id;
    try {

        console.log('user id:', req.userId, 'patient id:', req.params.patient_id)

        const removePatient = await User.findOneAndUpdate(
            { ObjectId: patient },
            {
                $pull: { patients: patient }
            },
            { new: true }
        );
        console.log('User patient:', removePatient);

        const deletedPatient = await Patient.deleteOne({ _id: req.params.patient_id });
        res.status(200).json({ message: 'Patient deleted', deletedPatient });
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}

//Get A Patient Within A User 
module.exports.get_patient = async (req, res) => {
    const patient = req.params.patient_id;
    try {
        const getPatient = await User.findOne(
            { ObjectId: patient },
            {
                patients: { ObjectId: patient }
            }

        ).populate('patients');

        console.log(getPatient);
        res.status(200).json({ message: 'Patient found!', patient: getPatient });
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors);
        res.status(400).json('Patient not found!');
    }
}

//Get All Patients Within A User
module.exports.get_all_patients = async (req, res) => {
    try {
        const getAllPatients = await User.findOne(
            { _id: req.userId }
        ).populate('patients');

        console.log(getAllPatients);
        res.status(200).json(getAllPatients.patients);
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors);
        res.status(400).json('No patients found!');
    }
}