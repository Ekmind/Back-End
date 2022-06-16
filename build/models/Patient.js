"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Appointments = _interopRequireDefault(require("./Appointments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mongoose = require('mongoose');

var Patient = new mongoose.Schema({
  name: String,
  last_name: String,
  age: Number,
  gender: String,
  image: String,
  phone: Number,
  email: String,
  appointments: [_Appointments["default"]]
});
var _default = Patient;
exports["default"] = _default;