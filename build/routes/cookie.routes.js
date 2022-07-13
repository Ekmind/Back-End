"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();

var cookieCtrl = require('../controllers/cookies.controller');

router.get('/', cookieCtrl.get_cookie);
router.get('/get-cookie', cookieCtrl.set_cookie);
var _default = router;
exports["default"] = _default;