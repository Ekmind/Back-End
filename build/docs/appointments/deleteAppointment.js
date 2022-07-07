"use strict";

module.exports = {
  "delete": {
    tags: ["Appointment"],
    description: "Deletes an appointment",
    operationId: "deleteAppointment",
    responses: {
      200: {
        description: "Appointment deleted"
      },
      400: {
        description: "Appointment could not be deleted"
      },
      404: {
        description: "Patient does not exist"
      }
    }
  }
};