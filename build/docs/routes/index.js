"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//User
var signup = require('../users/signup');

var login = require('../users/login'); //Patient


var newPatient = require('../patients/createPatient');

var updatePatient = require('../patients/updatePatient');

var getPatient = require('../patients/getPatient');

var getAllPatients = require('../patients/getAllPatients');

var reactivatePatient = require('../patients/reactivatePatient');

var deactivatePatient = require('../patients/deactivatePatient');

var deletePatient = require('../patients/deletePatient'); //Appointments


var newAppointment = require('../appointments/createAppointment');

var updateAppointment = require('../appointments/updateAppointment');

var setAsComplete = require('../appointments/completeAppointment');

var setAsPending = require('../appointments/pendingAppointment');

var deleteAppointment = require('../appointments/deleteAppointment');

module.exports = {
  paths: {
    //Users
    '/api/signup': _objectSpread({}, signup),
    '/api/login': _objectSpread({}, login),
    //Patients
    '/api/insert/patient/{:userId}': _objectSpread({}, newPatient),
    "/api/update/patient/{:patient_id}": _objectSpread({}, updatePatient),
    "/api/get/patient/{:patient_id}": _objectSpread({}, getPatient),
    "/api/get/all/patients/{:userId}": _objectSpread({}, getAllPatients),
    "/api/reactivate/patient/{:patient_id}": _objectSpread({}, reactivatePatient),
    "/api/deactivate/patient/{:patient_id}": _objectSpread({}, deactivatePatient),
    "/api/delete/patient/{:patient_id}": _objectSpread({}, deletePatient),
    //Appointments
    "api/create/appointment/{:patient_id}": _objectSpread({}, newAppointment),
    "/api/update/appointment/{:appointment_id}": _objectSpread({}, updateAppointment),
    "/api/complete/appointment/{:appointment_id}": _objectSpread({}, setAsComplete),
    "/api/pending/appointment/{:appointment_id}": _objectSpread({}, setAsPending),
    "/api/delete/appointment/{:appointment_id}": _objectSpread({}, deleteAppointment)
  }
};