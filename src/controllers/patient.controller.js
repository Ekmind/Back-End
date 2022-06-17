import User from "../models/User";
import { handleErrors } from "../errors/handler.error";

module.exports.create_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = await req.body
    try {
        const newPatient = await User.findOneAndUpdate({ _id: req.userId },
            {
                $push: {
                    patients: [{
                        name: name,
                        last_name: last_name,
                        age: age,
                        gender: gender,
                        image: image,
                        phone: phone,
                        email: email
                    }]
                }
            },
            { new: true }
        );

        res.status(200).json({ message: 'Patient created', patients: newPatient.patients })
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}

module.exports.update_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = await req.body
    const Patient = await User.findOne(
        { "patients._id": req.params.patient_id },
        { patients: { $elemMatch: { patient: { _id: req.params.patient_id } } } }
    );
    console.log(Patient.patients)
    try {

        res.json(await Patient.patients)
        // const updatedPatient = await User.findOneAndUpdate(
        //     { "patients._id": req.params.patient_id },
        //     {
        //         $set: {
        //             patients: [{
        //                 _id: req.params._id,
        //                 name: name,
        //                 last_name: last_name,
        //                 age: age,
        //                 gender: gender,
        //                 image: image,
        //                 phone: phone,
        //                 email: email
        //             }]
        //         }
        //     },
        //     { new: true }
        // );

        // res.status(200).json({ message: 'Patient updated', patients: updatedPatient.patients })
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}

module.exports.delete_patient = async (req, res) => {
    try {

        console.log('user id:', req.userId, 'patient id:', req.params.delete_id)
        const deletedPatient = await User.findOneAndUpdate(
            { _id: req.userId },
            { $pull: { patients: { _id: req.params.delete_id } } },
            { new: true }
        );

        res.status(200).json({ message: 'Patient deleted', patients: deletedPatient.patients })
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}

module.exports.get_patient = async (req, res) => {
    try {

        console.log({ user: req.userId, patient: req.params.patient_id })
        const getPatient = await User.findOne(
            { "patients._id": req.params.patient_id },
            { patients: { $elemMatch: { _id: req.params.patient_id } } }
        );

        console.log('Patient found!', getPatient.patients)
        res.status(200).json({ message: 'Patient found!', patient: getPatient.patients });
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors);
        res.status(400).json('Patient not found!');
    }
}

module.exports.get_all_patients = async (req, res) => {
    try {
        const getAllPatients = await User.findOne(
            { _id: req.userId }
        );
        console.log(getAllPatients)
        res.status(200).json(getAllPatients.patients);
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors);
        res.status(400).json('No patients found!');
    }
}