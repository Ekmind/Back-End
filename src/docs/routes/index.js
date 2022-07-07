//User
const signup = require('../users/signup');
const login = require('../users/login');

//Patient
const newPatient = require('../patients/createPatient');
const updatePatient = require('../patients/updatePatient');
const getPatient = require('../patients/getPatient');
const getAllPatients = require('../patients/getAllPatients');
const reactivatePatient = require('../patients/reactivatePatient');
const deactivatePatient = require('../patients/deactivatePatient');
const deletePatient = require('../patients/deletePatient');

//Appointments
const newAppointment = require('../appointments/createAppointment');
const updateAppointment = require('../appointments/updateAppointment');
const setAsComplete = require('../appointments/completeAppointment');
const setAsPending = require('../appointments/pendingAppointment');
const deleteAppointment = require('../appointments/deleteAppointment');

module.exports = {
    paths: {

        //Users
        '/api/signup': {
            ...signup,
        },
        '/api/login': {
            ...login
        },

        //Patients
        '/api/insert/patient/{:userId}': {
            ...newPatient
        },
        "/api/update/patient/{:patient_id}": {
            ...updatePatient
        },
        "/api/get/patient/{:patient_id}": {
            ...getPatient
        },
        "/api/get/all/patients/{:userId}": {
            ...getAllPatients
        },
        "/api/reactivate/patient/{:patient_id}": {
            ...reactivatePatient
        },
        "/api/deactivate/patient/{:patient_id}": {
            ...deactivatePatient
        },
        "/api/delete/patient/{:patient_id}": {
            ...deletePatient
        },

        //Appointments
        "api/create/appointment/{:patient_id}": {
            ...newAppointment
        },
        "/api/update/appointment/{:appointment_id}": {
            ...updateAppointment
        },
        "/api/complete/appointment/{:appointment_id}": {
            ...setAsComplete
        },
        "/api/pending/appointment/{:appointment_id}": {
            ...setAsPending
        },
        "/api/delete/appointment/{:appointment_id}": {
            ...deleteAppointment
        }
    }
}