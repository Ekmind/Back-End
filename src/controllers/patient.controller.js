import User from "../models/User";
import { handleErrors } from "../errors/handler.error";
import Patient from "../models/Patient";

//Create Patient
module.exports.create_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = await req.body

    try {
        const doctor = await User.findById({ _id: req.userId });
        const patient = {
            name: name,
            last_name: last_name,
            age: age,
            gender: gender,
            image: image,
            phone: phone,
            email: email,
            doctor: doctor._id
        };

        if (doctor) {
            try {
                const newPatient = await Patient.create(patient);

                const updateDoctor = await User.findByIdAndUpdate(
                    { _id: doctor._id },
                    {
                        $push: { patients: newPatient._id }
                    }
                );

                console.log(updateDoctor)

                res.status(200).json({ message: 'Patient created', patient: newPatient })
            } catch (err) {
                handleErrors(err);
                console.log({ Error: 'Patient could not be created' });
                res.json({ Error: 'Patient could not be created' });
            }

        }
    } catch (err) {
        handleErrors(err);
        console.log({ Error: 'Valid ObjectId missing' });
        res.json({ Error: 'Valid ObjectId missing' })
    }

}

//Update Patient Credentials
module.exports.update_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = req.body
    try {
        const patient = await Patient.findById({ _id: req.params.patient_id });
        if (patient) {
            try {
                const updatedPatient = await Patient.findByIdAndUpdate(
                    { _id: patient.id },
                    {
                        name: name,
                        last_name: last_name,
                        age: age,
                        gender: gender,
                        image: image,
                        phone: phone,
                        email: email
                    },
                    { new: true }
                );

                res.status(200).json({ message: 'Patient updated', patient: updatedPatient });
            } catch (err) {
                const errors = handleErrors(err);
                console.log({ message: 'Patient could not be updated' });
                res.json({ Error: 'Patient could not be updated' });
            }
        }
    } catch (err) {
        handleErrors(err);
        console.log({ Error: 'Valid ObjectId missing' });
        res.json({ Error: 'Valid ObjectId missing' });
    }
}

//Delete Patient
module.exports.delete_patient = async (req, res) => {

    try {
        const patient = await Patient.findById({ _id: req.params.patient_id });

        if (patient) {
            try {
                const removePatient = await User.findByIdAndUpdate(
                    { _id: patient.doctor },
                    {
                        $pull: { patients: patient._id }
                    },
                    { new: true }
                );

                const deletedPatient = await Patient.deleteOne({ _id: patient._id });
                console.log({ message: 'User patient:', patient: deletedPatient, doctor: removePatient });
                res.status(200).json({ message: 'Patient deleted', patient: deletedPatient, doctor: removePatient });
            } catch (err) {
                handleErrors(err);
                console.log({ Error: 'Patient could not be deleted' });
                res.json({ Error: 'Patient could not be deleted' });
            }
        }
    } catch (err) {
        handleErrors(err);
        console.log({ Error: 'Valid ObjectId missing' });
        res.json({ Error: 'Valid ObjectId missing' });
    }


}

//Get A Patient Within A User 
module.exports.get_patient = async (req, res) => {
    try {
        const getPatient = await Patient.findById({ _id: req.params.patient_id });

        console.log(getPatient);
        res.status(200).json({ message: 'Patient found!', patient: getPatient });
    } catch (err) {
        handleErrors(err);
        console.log({ Error: 'Patient not found!' });
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
        handleErrors(err);
        console.log({ Error: 'No patients found!' });
        res.status(400).json('No patients found!');
    }
}