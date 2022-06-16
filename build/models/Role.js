"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ROLES = void 0;

var _mongoose = require("mongoose");

var ROLES = ['user', 'moderator', 'admin'];
exports.ROLES = ROLES;
var Role = new _mongoose.Schema({
  name: String
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Role', Role);

exports["default"] = _default;