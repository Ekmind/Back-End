"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _handler = require("../errors/handler.error");

var _Appointments = _interopRequireDefault(require("../models/Appointments"));

var _Patient = _interopRequireDefault(require("../models/Patient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Create Appointment
module.exports.create_appointment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, date, notes, emotional_data, patient, newAppointment, addAppointment, _errors;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, date = _req$body.date, notes = _req$body.notes, emotional_data = _req$body.emotional_data;
            _context.prev = 1;
            _context.next = 4;
            return _Patient["default"].findById({
              _id: req.params.patient_id
            });

          case 4:
            patient = _context.sent;

            if (!patient) {
              _context.next = 22;
              break;
            }

            _context.prev = 6;
            _context.next = 9;
            return _Appointments["default"].create({
              date: date,
              notes: notes,
              patient: patient.id,
              emotional_data: emotional_data
            });

          case 9:
            newAppointment = _context.sent;
            _context.next = 12;
            return _Patient["default"].findByIdAndUpdate({
              _id: patient.id
            }, {
              $push: {
                appointments: newAppointment._id
              }
            }, {
              "new": true
            });

          case 12:
            addAppointment = _context.sent;
            console.log({
              message: 'Appointment created successfully',
              Appointment: newAppointment,
              Patient: addAppointment
            });
            res.status(200).json({
              message: 'Appointment created successfully',
              Appointment: newAppointment
            });
            _context.next = 22;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](6);
            _errors = (0, _handler.handleErrors)(_context.t0);
            console.log({
              message: 'Appointment could not be created',
              error: _errors
            });
            res.status(400).json({
              Error: 'Appointment could not be created'
            });

          case 22:
            _context.next = 29;
            break;

          case 24:
            _context.prev = 24;
            _context.t1 = _context["catch"](1);
            (0, _handler.handleErrors)(_context.t1);
            console.log({
              message: 'Patient not found'
            });
            res.status(404).json({
              Error: 'Patient not found'
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 24], [6, 17]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //Update Appointment


module.exports.update_appointment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, date, notes, appointment, updatedAppointment, _errors2, _errors3;

    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, date = _req$body2.date, notes = _req$body2.notes;
            _context2.prev = 1;
            _context2.next = 4;
            return _Appointments["default"].findById({
              _id: req.params.appointment_id
            });

          case 4:
            appointment = _context2.sent;

            if (!appointment) {
              _context2.next = 19;
              break;
            }

            _context2.prev = 6;
            _context2.next = 9;
            return _Appointments["default"].findOneAndUpdate({
              _id: appointment.id
            }, {
              date: date,
              notes: notes
            }, {
              "new": true
            });

          case 9:
            updatedAppointment = _context2.sent;
            console.log('Appointment Updated:', updatedAppointment);
            return _context2.abrupt("return", res.status(200).json({
              message: 'Appointment updated',
              appointment: updatedAppointment
            }));

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](6);
            _errors2 = (0, _handler.handleErrors)(_context2.t0);
            console.log({
              message: 'Appointment could not be updated'
            });
            return _context2.abrupt("return", res.status(400).json({
              Error: 'Appointment could not be updated'
            }));

          case 19:
            console.log('Patient does not exist');
            res.status(400).json({
              Error: 'Patient does not exist'
            });
            _context2.next = 28;
            break;

          case 23:
            _context2.prev = 23;
            _context2.t1 = _context2["catch"](1);
            _errors3 = (0, _handler.handleErrors)(_context2.t1);
            console.log({
              message: 'Valid ObjectId missing'
            });
            res.status(400).json({
              Error: 'Valid ObjectId missing'
            });

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 23], [6, 14]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //Delete Appointment


module.exports.delete_appointment = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var appointment, removeAppointment, deletedAppointment;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Appointments["default"].findById({
              _id: req.params.appointment_id
            });

          case 3:
            appointment = _context3.sent;

            if (!appointment) {
              _context3.next = 21;
              break;
            }

            _context3.prev = 5;
            _context3.next = 8;
            return _Patient["default"].findOneAndUpdate({
              _id: appointment.patient
            }, {
              $pull: {
                appointments: appointment._id
              }
            }, {
              "new": true
            });

          case 8:
            removeAppointment = _context3.sent;
            _context3.next = 11;
            return _Appointments["default"].deleteOne({
              _id: appointment.id
            });

          case 11:
            deletedAppointment = _context3.sent;
            console.log({
              message: 'Appointment deleted',
              Appointment: deletedAppointment,
              Patient: removeAppointment
            });
            return _context3.abrupt("return", res.status(200).json({
              message: 'Appointment deleted',
              Appointment: deletedAppointment
            }));

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](5);
            (0, _handler.handleErrors)(_context3.t0);
            console.log({
              message: 'Appointment could not be deleted'
            });
            return _context3.abrupt("return", res.json({
              Error: 'Appointment could not be deleted'
            }));

          case 21:
            console.log({
              message: 'Patient does not exist'
            });
            res.status(400).json({
              Error: 'Patient does not exist'
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
}(); //Set Appointment as Completed


module.exports.set_as_completed = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var appointment, completed, completedPatient;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Appointments["default"].findById({
              _id: req.params.appointment_id
            });

          case 3:
            appointment = _context4.sent;

            if (!appointment) {
              _context4.next = 21;
              break;
            }

            _context4.prev = 5;
            _context4.next = 8;
            return _Appointments["default"].findByIdAndUpdate({
              _id: appointment._id
            }, {
              $set: {
                pending: false
              }
            }, {
              "new": true
            });

          case 8:
            completed = _context4.sent;
            _context4.next = 11;
            return _Patient["default"].findByIdAndUpdate({
              _id: appointment.patient
            }, {
              $pull: {
                appointments: appointment._id
              }
            }, {
              "new": true
            });

          case 11:
            completedPatient = _context4.sent;
            console.log({
              message: 'Appointment completed',
              pending: completed.pending
            });
            return _context4.abrupt("return", res.status(200).json({
              message: 'Appointment completed',
              pending: completed.pending
            }));

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](5);
            (0, _handler.handleErrors)(_context4.t0);
            console.log({
              Error: 'Appointment could not be set as completed'
            });
            return _context4.abrupt("return", res.json({
              Error: 'Appointment could not be set as completed'
            }));

          case 21:
            console.log({
              message: 'Appointment not found'
            });
            res.status(404).json({
              message: 'Appointment not found'
            });
            _context4.next = 30;
            break;

          case 25:
            _context4.prev = 25;
            _context4.t1 = _context4["catch"](0);
            (0, _handler.handleErrors)(_context4.t1);
            console.log({
              Error: 'Valid ObjectId missing'
            });
            res.json({
              Error: 'Valid ObjectId missing'
            });

          case 30:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 25], [5, 16]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //Set to pending


module.exports.set_to_pending = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var appointment, patient, pending, pendingPatient;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Appointments["default"].findById({
              _id: req.params.appointment_id
            });

          case 3:
            appointment = _context5.sent;
            _context5.next = 6;
            return _Patient["default"].findById({
              _id: appointment.patient
            });

          case 6:
            patient = _context5.sent;

            if (!appointment) {
              _context5.next = 25;
              break;
            }

            _context5.prev = 8;
            _context5.next = 11;
            return _Appointments["default"].findByIdAndUpdate({
              _id: appointment._id
            }, {
              $set: {
                pending: true
              }
            }, {
              "new": true
            });

          case 11:
            pending = _context5.sent;
            _context5.next = 14;
            return _Patient["default"].findByIdAndUpdate({
              _id: appointment.patient
            }, {
              $push: {
                appointments: appointment._id
              }
            }, {
              "new": true
            });

          case 14:
            pendingPatient = _context5.sent;
            pendingPatient.save();
            console.log({
              message: 'Appointment pending',
              pending: pending.pending
            });
            return _context5.abrupt("return", res.status(200).json({
              message: 'Appointment pending',
              pending: pending.pending
            }));

          case 20:
            _context5.prev = 20;
            _context5.t0 = _context5["catch"](8);
            (0, _handler.handleErrors)(_context5.t0);
            console.log({
              Error: 'Appointment could not be set to pending'
            });
            return _context5.abrupt("return", res.json({
              Error: 'Appointment could not be set to pending'
            }));

          case 25:
            console.log({
              message: 'Appointment not found'
            });
            res.status(404).json({
              message: 'Appointment not found'
            });
            _context5.next = 34;
            break;

          case 29:
            _context5.prev = 29;
            _context5.t1 = _context5["catch"](0);
            (0, _handler.handleErrors)(_context5.t1);
            console.log({
              Error: 'Valid ObjectId missing'
            });
            res.json({
              Error: 'Valid ObjectId missing'
            });

          case 34:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 29], [8, 20]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //Insert Emotional Data


module.exports.insert_data = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body3, angry, disgust, fear, happy, neutral, sad, surprise, appointment, insert;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body3 = req.body, angry = _req$body3.angry, disgust = _req$body3.disgust, fear = _req$body3.fear, happy = _req$body3.happy, neutral = _req$body3.neutral, sad = _req$body3.sad, surprise = _req$body3.surprise;
            _context6.prev = 1;
            _context6.next = 4;
            return _Appointments["default"].findById({
              _id: req.params.appointment_id
            });

          case 4:
            appointment = _context6.sent;

            if (!appointment) {
              _context6.next = 19;
              break;
            }

            _context6.prev = 6;
            _context6.next = 9;
            return _Appointments["default"].findByIdAndUpdate({
              _id: appointment._id
            }, {
              $push: {
                emotional_data: {
                  angry: angry,
                  disgust: disgust,
                  fear: fear,
                  happy: happy,
                  neutral: neutral,
                  sad: sad,
                  surprise: surprise
                }
              }
            }, {
              "new": true
            });

          case 9:
            insert = _context6.sent;
            console.log({
              message: 'Emotional data inserted',
              appointment: insert.emotional_data
            });
            return _context6.abrupt("return", res.json({
              message: 'Emotional data inserted',
              appointment: insert.emotional_data
            }));

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](6);
            (0, _handler.handleErrors)(_context6.t0);
            console.log({
              Error: 'Data could not be inserted'
            });
            res.json({
              Error: 'Data could not be inserted'
            });

          case 19:
            console.log({
              Error: 'Appointment not found'
            });
            res.status(404).json({
              Error: 'Appointment not found'
            });
            _context6.next = 28;
            break;

          case 23:
            _context6.prev = 23;
            _context6.t1 = _context6["catch"](1);
            (0, _handler.handleErrors)(_context6.t1);
            console.log({
              Error: 'Valid ObjectId missing'
            });
            res.json({
              Error: 'Valid ObjectId missing'
            });

          case 28:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 23], [6, 14]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

module.exports.get_all_appointments = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var sessions;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return _Patient["default"].findById({
              _id: req.params.patient_id
            }).populate('appointments');

          case 3:
            sessions = _context7.sent;
            res.status(200).json({
              message: "Sessions found!",
              sessions: sessions.appointments
            });
            _context7.next = 12;
            break;

          case 7:
            _context7.prev = 7;
            _context7.t0 = _context7["catch"](0);
            errors = (0, _handler.handleErrors)(_context7.t0);
            console.log({
              message: 'No sessions found',
              Error: errors
            });
            res.json({
              Error: 'No sessions found'
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 7]]);
  }));

  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

module.exports.get_session = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var session, _errors4;

    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return _Appointments["default"].findById({
              _id: req.params.session_id
            });

          case 3:
            session = _context8.sent;
            res.status(200).json({
              sesh: session,
              message: 'Session found'
            });
            _context8.next = 12;
            break;

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            _errors4 = (0, _handler.handleErrors)(_context8.t0);
            console.log(_errors4);
            res.json({
              Error: 'Session not found'
            });

          case 12:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));

  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();