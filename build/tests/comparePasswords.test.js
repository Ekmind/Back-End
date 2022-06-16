"use strict";

var bcrypt = require('bcrypt');

var encrypt = function encrypt(password) {
  var salt = bcrypt.genSaltSync(10);
  var encrypted = bcrypt.hashSync(password, salt);
  console.log(encrypted);
  return encrypted;
};

var compare = function compare(password, savedEncrypt) {
  var comparition = bcrypt.compareSync(password, savedEncrypt);
  console.log(comparition);
  return comparition;
}; // encrypt('TopSecret') //$2b$10$kognBVHl/ZvDpfQlwb6GJunLRNKYeEccEcL6d8IA7myE3PiOse35y
// compare('TopSecret', "$2b$10$kognBVHl/ZvDpfQlwb6GJunLRNKYeEccEcL6d8IA7myE3PiOse35y")


test('when given the right password it should return: true', function () {
  expect(compare('TopSecret', '$2b$10$kognBVHl/ZvDpfQlwb6GJunLRNKYeEccEcL6d8IA7myE3PiOse35y')).toBe(true);
});
test('when given the wrong password it should return: false', function () {
  expect(compare('Topsecret', '$2b$10$kognBVHl/ZvDpfQlwb6GJunLRNKYeEccEcL6d8IA7myE3PiOse35y')).toBe(false);
});