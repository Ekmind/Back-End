"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleErrors = void 0;

var fs = require('fs');

var path = 'src/errors/logs/errors.json';

var handleErrors = function handleErrors(err) {
  var message = [{
    error: err.message,
    code: err.code
  }];

  var value = function value(data) {
    return JSON.stringify(data, null, 2);
  };

  var errors = {
    name: "",
    last_name: "",
    email: "",
    password: ""
  };

  var saveLogs = function saveLogs(path, value, error) {
    fs.writeFile(path, value, function (error) {
      if (error) return console.log({
        error_logs: error.message
      });
      console.log({
        error_logs: 'Error log saved'
      });
    });
  }; //Jwt expired


  if (err.message.includes('jwt expired')) {
    errors.message = 'Session expired';
    return {
      error: errors.message,
      code: err.code
    };
  } //Wrong email


  if (err.message === 'No user with that email exist') {
    errors.email = 'User not found';
  } //Wrong password


  if (err.message === 'Wrong password') {
    errors.password = 'Incorrect password';
  } //Duplicated email error


  if (err.code === 11000) {
    errors.email = 'Email is already in use';
    return errors;
  } //Credentials error(s)


  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(function (error) {
      errors[error.path] = error.message;
    });
    saveLogs(path, value({
      errors: errors
    }));
    return errors;
  }

  console.log(message); // saveLogs(path, value({ message },));

  return errors;
};

exports.handleErrors = handleErrors;