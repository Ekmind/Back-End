"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var appointmentSchema = new mongoose.Schema({
  date: String,
  notes: String,
  patient: {
    ref: 'Patient',
    type: mongoose.Schema.Types.ObjectId
  },
  pending: {
    type: Boolean,
    "default": true
  },
  emotional_data: []
}, {
  timestamps: true,
  versionKey: false
});
var Appointment = mongoose.model('Appointment', appointmentSchema);
var _default = Appointment;
exports["default"] = _default;