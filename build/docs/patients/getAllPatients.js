"use strict";

module.exports = {
  get: {
    tags: ["Patient"],
    description: "Get all patients",
    operationId: "getAllPatient",
    responses: {
      200: {
        description: "Patients found"
      },
      404: {
        description: "No patients found"
      }
    }
  }
};