// import { Router } from "express";
const Router = require("express")
const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import { authJwt, verifySignUp } from "../middlewares";

router.post('/signup', [
    verifySignUp.checkRolesExisted,
    verifySignUp.checkDuplicatedEmail,
    verifySignUp.checkCredentialsExist,
    verifySignUp.validatePasswordLength
], authCtrl.signUp)

router.post('/signin', authCtrl.signIn)

router.put('/edit/:userId', [
    authJwt.verifyToken,
    authCtrl.changeProfile,
    verifySignUp.validatePasswordLength
])


export default router;