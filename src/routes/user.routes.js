const { Router } = require("express");
const router = Router()

const userCtrl = require("../controllers/user.controller")
const { authJwt, verifySignUp } = require("../middlewares")

router.post('/create', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignUp.checkRolesExisted
], userCtrl.createUser)

export default router;