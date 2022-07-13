import { Router } from "express";
const router = Router();
const cookieCtrl = require('../controllers/cookies.controller')




router.get('/', cookieCtrl.get_cookie);
router.get('/get-cookie', cookieCtrl.set_cookie);



export default router;