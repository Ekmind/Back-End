import { Router } from "express";
const router = Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/index.js');

import * as authCtrl from '../controllers/auth.controller';
import * as patientCtrl from '../controllers/patient.controller';
import * as appointmentCtrl from '../controllers/appointment.controller';
import { authJwt, verifyCredentials } from "../middlewares";

//Swagger Documentation
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerDocument));

//Sign Up (Registration)
router.get('/signup', () => { });
router.post('/signup', authCtrl.signup_post);

//Log In (Authentication)
router.post('/login', authCtrl.login_post);
router.get('/login', authJwt.verifyToken, authCtrl.login_get);

//Log Out (End User Session)
router.get('/logout', authCtrl.logout_get);

//Patient Manegement
router.post('/insert/patient/:userId', authJwt.verifyToken, patientCtrl.create_patient);
router.patch('/update/patient/:patient_id', authJwt.verifyToken, patientCtrl.update_patient);
router.delete('/delete/patient/:patient_id', authJwt.verifyToken, patientCtrl.delete_patient);
router.get('/reactivate/patient/:patient_id', authJwt.verifyToken, patientCtrl.reactivate_patient);
router.get('/deactivate/patient/:patient_id', authJwt.verifyToken, patientCtrl.deactivate_patient);

//Get Patients
router.get('/get/patient/:patient_id', authJwt.verifyToken, patientCtrl.get_patient);
router.get('/get/all/patients/:userId', authJwt.verifyToken, patientCtrl.get_all_patients);

//Appointment Management
router.post('/create/appointment/:patient_id', authJwt.verifyToken, appointmentCtrl.create_appointment);
router.patch('/update/appointment/:appointment_id', authJwt.verifyToken, appointmentCtrl.update_appointment);
router.delete('/delete/appointment/:appointment_id', authJwt.verifyToken, appointmentCtrl.delete_appointment);
router.get('/complete/appointment/:appointment_id', authJwt.verifyToken, appointmentCtrl.set_as_completed);
router.get('/pending/appointment/:appointment_id', authJwt.verifyToken, appointmentCtrl.set_to_pending);

//Appointment -Emotional Data
router.patch('/appointment/data/insert/:appointment_id', authJwt.verifyToken, appointmentCtrl.insert_data);

export default router;