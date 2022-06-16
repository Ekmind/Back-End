"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var Appointment = new mongoose.Schema({
  date: Date,
  notes: String,
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
  timestamps: true
});
var _default = Appointment;
exports["default"] = _default;