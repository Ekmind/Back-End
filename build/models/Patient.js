"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Appointments = _interopRequireDefault(require("./Appointments"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  age: Number,
  gender: String,
  image: String,
  phone: Number,
  email: String,
  doctor: mongoose.Types.ObjectId,
  isActive: {
    type: Boolean,
    "default": true
  },
  appointments: {
    ref: 'Appointment',
    type: mongoose.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
}); // patientSchema.pre('deleteOne', async function (next) {
//     const remove = await User.findOne(
//         { _id: this._id }
//     );
//     console.log('usuario:', remove)
//     next();
// })

var Patient = mongoose.model('Patient', patientSchema);
var _default = Patient;
exports["default"] = _default;