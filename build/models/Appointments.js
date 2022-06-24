"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var appointmentSchema = new mongoose.Schema({
  date: Date,
  notes: String,
  patient: mongoose.Types.ObjectId,
  completed: Boolean,
  emotional_data: [{
    angry: Number,
    disgust: Number,
    fear: Number,
    happy: Number,
    neutral: Number,
    sad: Number,
    surprise: Number
  }]
}, {
  timestamps: true,
  versionKey: false
});
var Appointment = mongoose.model('Appointment', appointmentSchema);
var _default = Appointment;
exports["default"] = _default;