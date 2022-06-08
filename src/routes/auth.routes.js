const { Router } = require("express");
const router = Router()

const authCtrl = require('../controllers/auth.controller')
const { authJwt, verifySignUp } = require("../middlewares")

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


// export default router;