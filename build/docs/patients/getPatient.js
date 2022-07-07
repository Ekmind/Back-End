"use strict";

module.exports = {
  get: {
    tags: ["Patient"],
    description: "Get a patient",
    operationId: "getPatient",
    responses: {
      200: {
        description: "Patient found"
      },
      404: {
        description: "Patient not found"
      }
    }
  }
};