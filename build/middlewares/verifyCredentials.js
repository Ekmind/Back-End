"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRolesExisted = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _Role = require("../models/Role");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var checkRolesExisted = function checkRolesExisted(req, res, next) {
  if (req.body.role) {
    for (var i = 0; i < req.body.role.length; i++) {
      if (!_Role.ROLES.includes(req.body.role[i])) {
        console.log(req.body.role[i]);
        return res.status(400).json({
          message: "Role ".concat(req.body.role[i], " does not exist")
        });
      }
    }
  }

  next();
};

exports.checkRolesExisted = checkRolesExisted;