module.exports = {
  get: {
    tags: ["Appointment"],
    description: "Marks an appointment as completed",
    operationId: "appointmentCompleted",
    responses: {
      200: {
        description: "Appointment completed"
      },
      400: {
        description: "Appointment could not be set as completed"
      }
    }
  }
}
