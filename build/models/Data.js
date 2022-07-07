"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
  angry: Number,
  disgust: Number,
  fear: Number,
  happy: Number,
  neutral: Number,
  sad: Number,
  surprise: Number
}, {
  timestamps: true,
  versionKey: false
});
var Data = mongoose.model('Data', dataSchema);
var _default = Data;
exports["default"] = _default;