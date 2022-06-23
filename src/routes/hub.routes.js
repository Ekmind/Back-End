import { Router } from "express";
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import * as patientCtrl from '../controllers/patient.controller';
import * as appointmentCtrl from '../controllers/appointment.controller';
import { authJwt, verifyCredentials } from "../middlewares";

//Sign Up (Registration)
router.get('/signup', () => { });
router.post('/signup', authCtrl.signup_post);

//Log In (Authentication)
router.get('/login', authJwt.verifyToken, authCtrl.login_get);
router.post('/login', authCtrl.login_post);

//Log Out (End User Session)
router.get('/logout', authCtrl.logout_get);

//Patient Manegement
router.post('/insert/patient/:userId', authJwt.verifyToken, patientCtrl.create_patient);
router.patch('/update/patient/:patient_id', authJwt.verifyToken, patientCtrl.update_patient);
router.delete('/delete/patient/:patient_id', authJwt.verifyToken, patientCtrl.delete_patient);

router.get('/get/patient/:patient_id', authJwt.verifyToken, patientCtrl.get_patient);
router.get('/get/all/patients/:userId', authJwt.verifyToken, patientCtrl.get_all_patients);

//Appointment Management
router.post('/create/appointment/:patient_id', authJwt.verifyToken, appointmentCtrl.create_appointment);
router.patch('/update/appointment/:appointment_id', authJwt.verifyToken, appointmentCtrl.update_appointment);

export default router;