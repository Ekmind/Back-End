"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _User = _interopRequireDefault(require("../models/User"));

var _handler = require("../errors/handler.error");

var _Patient = _interopRequireDefault(require("../models/Patient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Create Patient
module.exports.create_patient = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _yield$req$body, name, last_name, age, gender, image, phone, email, doctor, patient, newPatient, updatedDoctor;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.body;

          case 2:
            _yield$req$body = _context.sent;
            name = _yield$req$body.name;
            last_name = _yield$req$body.last_name;
            age = _yield$req$body.age;
            gender = _yield$req$body.gender;
            image = _yield$req$body.image;
            phone = _yield$req$body.phone;
            email = _yield$req$body.email;
            _context.prev = 10;
            _context.next = 13;
            return _User["default"].findById({
              _id: req.userId
            });

          case 13:
            doctor = _context.sent;
            patient = {
              name: name,
              last_name: last_name,
              age: age,
              gender: gender,
              image: image,
              phone: phone,
              email: email,
              doctor: doctor._id
            };

            if (!doctor) {
              _context.next = 32;
              break;
            }

            _context.prev = 16;
            _context.next = 19;
            return _Patient["default"].create(patient);

          case 19:
            newPatient = _context.sent;
            _context.next = 22;
            return _User["default"].findByIdAndUpdate({
              _id: doctor._id
            }, {
              $push: {
                patients: newPatient._id
              }
            }, {
              "new": true
            });

          case 22:
            updatedDoctor = _context.sent;
            console.log({
              message: 'Patient created',
              patient: newPatient,
              doctor: updatedDoctor.patients
            });
            return _context.abrupt("return", res.status(200).json({
              message: 'Patient created',
              patient: newPatient,
              doctor: updatedDoctor.patients
            }));

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](16);
            console.log((0, _handler.handleErrors)(_context.t0));
            console.log({
              Error: 'Patient could not be created'
            });
            return _context.abrupt("return", res.json({
              Error: 'Patient could not be created'
            }));

          case 32:
            console.log({
              message: 'Doctor not found'
            });
            res.status(404).json({
              message: 'Doctor not found'
            });
            _context.next = 41;
            break;

          case 36:
            _context.prev = 36;
            _context.t1 = _context["catch"](10);
            (0, _handler.handleErrors)(_context.t1);
            console.log({
              Error: 'Valid ObjectId missing'
            });
            res.json({
              Error: 'Valid ObjectId missing'
            });

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 36], [16, 27]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //Update Patient Credentials


module.exports.update_patient = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, name, last_name, age, gender, image, phone, email, patient, updatedPatient;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, last_name = _req$body.last_name, age = _req$body.age, gender = _req$body.gender, image = _req$body.image, phone = _req$body.phone, email = _req$body.email;
            console.log(req.body);
            _context2.prev = 2;
            _context2.next = 5;
            return _Patient["default"].findById({
              _id: req.params.patient_id
            });

          case 5:
            patient = _context2.sent;

            if (!patient) {
              _context2.next = 20;
              break;
            }

            _context2.prev = 7;
            _context2.next = 10;
            return _Patient["default"].findByIdAndUpdate({
              _id: patient.id
            }, {
              name: name,
              last_name: last_name,
              age: age,
              gender: gender,
              image: image,
              phone: phone,
              email: email
            }, {
              "new": true
            });

          case 10:
            updatedPatient = _context2.sent;
            console.log({
              message: 'Patient updated',
              patient: updatedPatient
            });
            return _context2.abrupt("return", res.status(200).json({
              message: 'Patient updated',
              patient: updatedPatient
            }));

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](7);
            (0, _handler.handleErrors)(_context2.t0);
            console.log({
              message: 'Patient could not be updated'
            });
            return _context2.abrupt("return", res.json({
              Error: 'Patient could not be updated'
            }));

          case 20:
            console.log({
              message: 'Patient not found'
            });
            res.status(404).json({
              message: 'Patient not found'
            });
            _context2.next = 29;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t1 = _context2["catch"](2);
            (0, _handler.handleErrors)(_context2.t1);
            console.log({
              Error: 'Valid ObjectId missing'
            });
            res.json({
              Error: 'Valid ObjectId missing'
            });

          case 29:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 24], [7, 15]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //Delete Patient


module.exports.delete_patient = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var patient, removePatient, deletedPatient;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Patient["default"].findById({
              _id: req.params.patient_id
            });

          case 3:
            patient = _context3.sent;

            if (!patient) {
              _context3.next = 21;
              break;
            }

            _context3.prev = 5;
            _context3.next = 8;
            return _User["default"].findByIdAndUpdate({
              _id: patient.doctor
            }, {
              $pull: {
                patients: patient._id
              }
            }, {
              "new": true
            });

          case 8:
            removePatient = _context3.sent;
            _context3.next = 11;
            return _Patient["default"].deleteOne({
              _id: patient._id
            });

          case 11:
            deletedPatient = _context3.sent;
            console.log({
              message: 'Patient deleted',
              patient: deletedPatient,
              doctor: removePatient.patients
            });
            return _context3.abrupt("return", res.status(200).json({
              message: 'Patient deleted',
              patient: deletedPatient,
              doctor: removePatient.patients
            }));

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](5);
            (0, _handler.handleErrors)(_context3.t0);
            console.log({
              Error: 'Patient could not be deleted'
            });
            return _context3.abrupt("return", res.json({
              Error: 'Patient could not be deleted'
            }));

          case 21:
            console.log({
              message: 'Patient not found'
            });
            res.status(404).json({
              message: 'Patient not found'
            });
            _context3.next = 30;
            break;

          case 25:
            _context3.prev = 25;
            _context3.t1 = _context3["catch"](0);
            (0, _handler.handleErrors)(_context3.t1);
            console.log({
              Error: 'Valid ObjectId missing'
            });
            res.json({
              Error: 'Valid ObjectId missing'
            });

          case 30:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 25], [5, 16]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //Get A Patient Within A User 


module.exports.get_patient = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var getPatient;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Patient["default"].findById({
              _id: req.params.patient_id
            });

          case 3:
            getPatient = _context4.sent;
            console.log(getPatient);
            res.status(200).json({
              message: 'Patient found!',
              patient: getPatient
            });
            _context4.next = 13;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            (0, _handler.handleErrors)(_context4.t0);
            console.log({
              Error: 'Patient not found!'
            });
            res.status(404).json('Patient not found!');

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //Get All Patients Within A User


module.exports.get_all_patients = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var getAllPatients;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _User["default"].findOne({
              _id: req.userId
            }).populate('patients');

          case 3:
            getAllPatients = _context5.sent;
            console.log({
              message: 'Patients found',
              patients: getAllPatients.patients
            });
            res.status(200).json({
              message: 'Patients found',
              patients: getAllPatients.patients
            });
            _context5.next = 13;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            (0, _handler.handleErrors)(_context5.t0);
            console.log({
              Error: 'No patients found!'
            });
            res.status(404).json('No patients found!');

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //Deactivate Patient


module.exports.deactivate_patient = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var patient, deactivatedPatient, updatedDoctor;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _Patient["default"].findById({
              _id: req.params.patient_id
            });

          case 3:
            patient = _context6.sent;

            if (!patient) {
              _context6.next = 21;
              break;
            }

            _context6.prev = 5;
            _context6.next = 8;
            return _Patient["default"].findByIdAndUpdate({
              _id: patient._id
            }, {
              $set: {
                isActive: false
              }
            }, {
              "new": true
            });

          case 8:
            deactivatedPatient = _context6.sent;
            _context6.next = 11;
            return _User["default"].findByIdAndUpdate({
              _id: patient.doctor
            }, {
              $pull: {
                patients: patient._id
              }
            }, {
              "new": true
            });

          case 11:
            updatedDoctor = _context6.sent;
            console.log({
              message: 'Patient deactivated',
              patient_isActive: deactivatedPatient.isActive,
              doctor_patients: updatedDoctor.patients
            });
            return _context6.abrupt("return", res.status(200).json({
              message: 'Patient deactivated',
              patient_isActive: deactivatedPatient.isActive,
              doctor_patients: updatedDoctor.patients
            }));

          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](5);
            (0, _handler.handleErrors)(_context6.t0);
            console.log({
              Error: 'Patient could not be deactivated'
            });
            return _context6.abrupt("return", res.json({
              Error: 'Patient could not be updated'
            }));

          case 21:
            console.log({
              message: 'Patient not found'
            });
            res.json({
              message: 'Patient not found'
            });
            _context6.next = 30;
            break;

          case 25:
            _context6.prev = 25;
            _context6.t1 = _context6["catch"](0);
            (0, _handler.handleErrors)(_context6.t1);
            console.log({
              Error: 'Valid ObjectId missing'
            });
            res.json({
              Error: 'Valid ObjectId missing'
            });

          case 30:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 25], [5, 16]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //Reactivate Patient


module.exports.reactivate_patient = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var patient, reactivatedPatient, updatedDoctor;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _Patient["default"].findById({
              _id: req.params.patient_id
            });

          case 3:
            patient = _context7.sent;

            if (!patient) {
              _context7.next = 21;
              break;
            }

            _context7.prev = 5;
            _context7.next = 8;
            return _Patient["default"].findByIdAndUpdate({
              _id: patient._id
            }, {
              $set: {
                isActive: true
              }
            }, {
              "new": true
            });

          case 8:
            reactivatedPatient = _context7.sent;
            _context7.next = 11;
            return _User["default"].findByIdAndUpdate({
              _id: patient.doctor
            }, {
              $push: {
                patients: patient._id
              }
            }, {
              "new": true
            });

          case 11:
            updatedDoctor = _context7.sent;
            console.log({
              message: 'Patient was reactivated',
              patient_isActive: reactivatedPatient.isActive,
              doctor_patients: updatedDoctor.patients
            });
            return _context7.abrupt("return", res.status(200).json({
              message: 'Patient was reactivated',
              patient_isActive: reactivatedPatient.isActive,
              doctor_patients: updatedDoctor.patients
            }));

          case 16:
            _context7.prev = 16;
            _context7.t0 = _context7["catch"](5);
            (0, _handler.handleErrors)(_context7.t0);
            console.log({
              Error: 'Patient could not be reactivated'
            });
            return _context7.abrupt("return", res.json({
              Error: 'Patient could not be reactivated'
            }));

          case 21:
            console.log({
              message: 'Patient not found'
            });
            res.status(404).json({
              message: 'Patient not found'
            });
            _context7.next = 30;
            break;

          case 25:
            _context7.prev = 25;
            _context7.t1 = _context7["catch"](0);
            (0, _handler.handleErrors)(_context7.t1);
            console.log({
              Error: 'Valid ObjectId missing'
            });
            res.json({
              Error: 'Valid ObjectId missing'
            });

          case 30:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 25], [5, 16]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();