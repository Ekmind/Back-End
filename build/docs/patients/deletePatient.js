"use strict";

module.exports = {
  "delete": {
    tags: ["Patient"],
    description: "Deletes a patient",
    operationId: "deletePatient",
    responses: {
      200: {
        description: "Patient deleted"
      },
      400: {
        description: "Patient could not be deleted"
      },
      404: {
        description: "Patient not found"
      }
    }
  }
};