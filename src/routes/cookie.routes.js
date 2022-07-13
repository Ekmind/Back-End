import { Router } from "express";
const router = Router();
const cookieCtrl = require('../controllers/cookies.controller')




router.get('/', cookieCtrl.get_cookie)



export default router;