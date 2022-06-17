import { Router } from "express";
const router = Router();

import * as authCtrl from '../controllers/auth.controller';
import * as patientCtrl from '../controllers/patient.controller';
import * as appointmentCtrl from '../controllers/appointment.controller';
import { authJwt, verifyCredentials, } from "../middlewares";


router.get('/signup', () => { });
router.post('/signup', authCtrl.signup_post);

router.get('/login', () => { });
router.post('/login', authCtrl.login_post);

router.get('/logout', authCtrl.logout_get);

router.put('/insert/patient/:userId', authJwt.verifyToken, patientCtrl.create_patient);
router.put('/update/patient/:patient_id', authJwt.verifyToken, patientCtrl.update_patient);
router.put('/delete/patient/:userId/:delete_id', authJwt.verifyToken, patientCtrl.delete_patient);

router.get('/get/patient/:patient_id', authJwt.verifyToken, patientCtrl.get_patient);
router.get('/get/all/patients/:userId', authJwt.verifyToken, patientCtrl.get_all_patients);

router.put('/create/appointment/:patient_id', authJwt.verifyToken, appointmentCtrl.create_appointment);




export default router;