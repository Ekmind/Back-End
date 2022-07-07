"use strict";

module.exports = {
  get: {
    tags: ["Patient"],
    description: "Reactivates a patient",
    operationId: "reactivatePatient",
    responses: {
      200: {
        description: "Patient reactivated"
      },
      400: {
        description: "Patient could not be reactivated"
      },
      404: {
        description: "Patient not found"
      }
    }
  }
};