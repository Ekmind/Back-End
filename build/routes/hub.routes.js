"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var authCtrl = _interopRequireWildcard(require("../controllers/auth.controller"));

var patientCtrl = _interopRequireWildcard(require("../controllers/patient.controller"));

var appointmentCtrl = _interopRequireWildcard(require("../controllers/appointment.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();

var swaggerUi = require('swagger-ui-express');

var swaggerDocument = require('../docs/index.js');

//Swagger Documentation
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerDocument)); //Sign Up (Registration)

router.get('/signup', function () {});
router.post('/signup', authCtrl.signup_post); //Log In (Authentication)

router.get('/login', _middlewares.authJwt.verifyToken, authCtrl.login_get);
router.post('/login', authCtrl.login_post); //Log Out (End User Session)

router.get('/logout', authCtrl.logout_get); //Patient Manegement

router.post('/insert/patient/:userId', _middlewares.authJwt.verifyToken, patientCtrl.create_patient);
router.patch('/update/patient/:patient_id', _middlewares.authJwt.verifyToken, patientCtrl.update_patient);
router["delete"]('/delete/patient/:patient_id', _middlewares.authJwt.verifyToken, patientCtrl.delete_patient);
router.get('/reactivate/patient/:patient_id', _middlewares.authJwt.verifyToken, patientCtrl.reactivate_patient);
router.get('/deactivate/patient/:patient_id', _middlewares.authJwt.verifyToken, patientCtrl.deactivate_patient); //Get Patients

router.get('/get/patient/:patient_id', _middlewares.authJwt.verifyToken, patientCtrl.get_patient);
router.get('/get/all/patients/:userId', _middlewares.authJwt.verifyToken, patientCtrl.get_all_patients); //Appointment Management

router.post('/create/appointment/:patient_id', _middlewares.authJwt.verifyToken, appointmentCtrl.create_appointment);
router.patch('/update/appointment/:appointment_id', _middlewares.authJwt.verifyToken, appointmentCtrl.update_appointment);
router["delete"]('/delete/appointment/:appointment_id', _middlewares.authJwt.verifyToken, appointmentCtrl.delete_appointment);
router.get('/complete/appointment/:appointment_id', _middlewares.authJwt.verifyToken, appointmentCtrl.set_as_completed);
router.get('/pending/appointment/:appointment_id', _middlewares.authJwt.verifyToken, appointmentCtrl.set_to_pending); //Appointment -Emotional Data

router.patch('/appointment/data/insert/:appointment_id', _middlewares.authJwt.verifyToken, appointmentCtrl.insert_data);
var _default = router;
exports["default"] = _default;