"use strict";

module.exports = {
  get: {
    tags: ["Appointment"],
    description: "Marks an appointment as pending",
    operationId: "appointmentPending",
    responses: {
      200: {
        description: "Appointment pending"
      },
      400: {
        description: "Appointment could not be set to pending"
      }
    }
  }
};