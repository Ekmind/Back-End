"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleErrors = void 0;

var handleErrors = function handleErrors(err) {
  // console.log(err.code)
  var errors = {
    name: "",
    last_name: "",
    email: "",
    password: ""
  }; //Jwt expired

  if (err.message.includes('jwt expired')) {
    errors.message = 'jwt expired';
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
  }

  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(function (error) {
      // console.log(error.message)
      errors[error.path] = error.message;
    });
  }

  console.log({
    error: err.message,
    code: err.code
  });
  console.log(errors.email);
  return errors;
};

exports.handleErrors = handleErrors;