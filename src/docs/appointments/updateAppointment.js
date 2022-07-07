module.exports = {
  patch: {
    tags: ["Appointment"],
    description: "Updates an appointment",
    operationId: "updateAppointment",
    parameters: [
      {
        name: "Appointment",
        in: "path",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Appointment"
            }
          }
        }
      }
    ],
    responses: {
      200: {
        description: "Appointment updated"
      },
      400: {
        description: "Appointment could not be updated"
      },
      404: {
        description: "Patient does not exist"
      }
    }
  }
}
