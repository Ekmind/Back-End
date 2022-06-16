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
router.get('/signup', function () {});
router.post('/signup', authCtrl.signup_post);
router.get('/login', function () {});
router.post('/login', authCtrl.login_post);
router.get('/logout', authCtrl.logout_get);
router.put('/insert/patient/:userId', _middlewares.authJwt.verifyToken, patientCtrl.create_patient);
router.put('/update/patient/:_id', _middlewares.authJwt.verifyToken, patientCtrl.update_patient);
router.put('/delete/patient/:userId/:delete_id', _middlewares.authJwt.verifyToken, patientCtrl.delete_patient);
router.put('/create/appointment/:patient_id', _middlewares.authJwt.verifyToken, appointmentCtrl.create_appointment);
var _default = router;
exports["default"] = _default;