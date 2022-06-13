import { Router } from "express";
const router = Router();

import * as authCtrl from '../controllers/auth.controller'
import { authJwt, verifyCredentials, } from "../middlewares";


router.get('/signup', () => { });
router.post('/signup', authCtrl.signup_post);

router.get('/login', () => { });
router.post('/login', authCtrl.login_post);

router.get('/logout', authCtrl.logout_get);

router.put('/insert/patient/:userId', authJwt.verifyToken, authCtrl.create_patient);
router.put('/update/patient/:_id', authJwt.verifyToken, authCtrl.update_patient);




export default router;