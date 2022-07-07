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

				const updatedDoctor = await User.findByIdAndUpdate(
					{ _id: doctor._id },
					{
						$push: { patients: newPatient._id }
					},
					{ new: true }
				);

				console.log({ message: 'Patient created', patient: newPatient, doctor: updatedDoctor.patients });
				return res.status(200).json({ message: 'Patient created', patient: newPatient, doctor: updatedDoctor.patients });

			} catch (err) {

				handleErrors(err);
				console.log({ Error: 'Patient could not be created' });
				return res.json({ Error: 'Patient could not be created' });

			}
		}

		console.log({ message: 'Doctor not found' });
		res.status(404).json({ message: 'Doctor not found' });

	} catch (err) {

		handleErrors(err);
		console.log({ Error: 'Valid ObjectId missing' });
		res.json({ Error: 'Valid ObjectId missing' });

	}

}

//Update Patient Credentials
module.exports.update_patient = async (req, res) => {
	const { name, last_name, age, gender, image, phone, email } = req.body;
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

				console.log({ message: 'Patient updated', patient: updatedPatient });
				return res.status(200).json({ message: 'Patient updated', patient: updatedPatient });

			} catch (err) {

				handleErrors(err);
				console.log({ message: 'Patient could not be updated' });
				return res.json({ Error: 'Patient could not be updated' });

			}
		}

		console.log({ message: 'Patient not found' });
		res.status(404).json({ message: 'Patient not found' });

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
				console.log({ message: 'Patient deleted', patient: deletedPatient, doctor: removePatient.patients });
				return res.status(200).json({ message: 'Patient deleted', patient: deletedPatient, doctor: removePatient.patients });

			} catch (err) {

				handleErrors(err);
				console.log({ Error: 'Patient could not be deleted' });
				return res.json({ Error: 'Patient could not be deleted' });

			}
		}

		console.log({ message: 'Patient not found' });
		res.status(404).json({ message: 'Patient not found' });

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
		res.status(404).json('Patient not found!');

	}
}

//Get All Patients Within A User
module.exports.get_all_patients = async (req, res) => {
	try {
		const getAllPatients = await User.findOne(
			{ _id: req.userId }
		).populate('patients');

		console.log({ message: 'Patients found', patients: getAllPatients.patients });
		res.status(200).json({ message: 'Patients found', patients: getAllPatients.patients });

	} catch (err) {

		handleErrors(err);
		console.log({ Error: 'No patients found!' });
		res.status(404).json('No patients found!');

	}
}

//Deactivate Patient
module.exports.deactivate_patient = async (req, res) => {
	try {
		const patient = await Patient.findById({ _id: req.params.patient_id });
		if (patient) {
			try {
				const deactivatedPatient = await Patient.findByIdAndUpdate(
					{ _id: patient._id },
					{
						$set: { isActive: false }
					},
					{ new: true }
				);

				const updatedDoctor = await User.findByIdAndUpdate(
					{ _id: patient.doctor },
					{
						$pull: { patients: patient._id }
					},
					{ new: true }
				);

				console.log({ message: 'Patient deactivated', patient_isActive: deactivatedPatient.isActive, doctor_patients: updatedDoctor.patients });
				return res.status(200).json({ message: 'Patient deactivated', patient_isActive: deactivatedPatient.isActive, doctor_patients: updatedDoctor.patients });

			} catch (err) {

				handleErrors(err);
				console.log({ Error: 'Patient could not be deactivated' });
				return res.json({ Error: 'Patient could not be updated' });
			}
		}

		console.log({ message: 'Patient not found' });
		res.json({ message: 'Patient not found' });

	} catch (err) {

		handleErrors(err);
		console.log({ Error: 'Valid ObjectId missing' });
		res.json({ Error: 'Valid ObjectId missing' });

	}
}

//Reactivate Patient
module.exports.reactivate_patient = async (req, res) => {
	try {
		const patient = await Patient.findById({ _id: req.params.patient_id });
		if (patient) {
			try {

				const reactivatedPatient = await Patient.findByIdAndUpdate(
					{ _id: patient._id },
					{
						$set: { isActive: true }
					},
					{ new: true }
				);

				const updatedDoctor = await User.findByIdAndUpdate(
					{ _id: patient.doctor },
					{
						$push: { patients: patient._id }
					},
					{ new: true }
				);

				console.log({ message: 'Patient was reactivated', patient_isActive: reactivatedPatient.isActive, doctor_patients: updatedDoctor.patients });
				return res.status(200).json({ message: 'Patient was reactivated', patient_isActive: reactivatedPatient.isActive, doctor_patients: updatedDoctor.patients });

			} catch (err) {

				handleErrors(err);
				console.log({ Error: 'Patient could not be reactivated' });
				return res.json({ Error: 'Patient could not be reactivated' });

			}
		}

		console.log({ message: 'Patient not found' });
		res.status(404).json({ message: 'Patient not found' });

	} catch (err) {

		handleErrors(err);
		console.log({ Error: 'Valid ObjectId missing' });
		res.json({ Error: 'Valid ObjectId missing' });

	}
}