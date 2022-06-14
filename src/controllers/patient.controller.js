import User from "../models/User";
import { handleErrors } from "../errors/handler.error";

module.exports.create_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = await req.body
    try {
        const newPatient = await User.updateOne({ _id: req.userId }, {
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
        });

        res.status(200).json({ patient: newPatient })
        return newPatient
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}

module.exports.update_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = await req.body
    try {
        console.log(await req.params._id)
        const updatedPatient = await User.updateOne(
            { "patients._id": req.params._id },
            {
                $set: {
                    "patients.$": [{
                        name: name,
                        last_name: last_name,
                        age: age,
                        gender: gender,
                        image: image,
                        phone: phone,
                        email: email
                    }]
                }
            });

        res.status(200).json({ patient: updatedPatient })
        return updatedPatient
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}

module.exports.delete_patient = async (req, res) => {
    try {
        console.log('user id:', req.userId, 'patient id:', req.params.delete_id)
        const deletedPatient = await User.updateOne(
            { _id: req.userId },
            { $pull: { patients: { _id: req.params.delete_id } } },
            { new: true }
        );


        res.status(200).json({ patient: deletedPatient })
        return deletedPatient
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}