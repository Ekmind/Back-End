"use strict";

var validator = require('validator');

var isEmail = function isEmail(email) {
  return validator["default"].isEmail(email);
};

test('When given a true email it should return true', function () {
  expect(isEmail('carlos@gmail.com')).toBe(true);
});
test('When given a false email it should return true', function () {
  expect(isEmail('carlos@mail')).toBe(false);
});