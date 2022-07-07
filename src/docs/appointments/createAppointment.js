module.exports = {
  post: {
    tags: ["Appointment"],
    description: "Creates a new appointment",
    operationId: "createAppointment",
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
        description: "Appointment created successfully"
      },
      400: {
        description: "Appointment could not be created"
      },
      404: {
        description: "Patient not found"
      }
    }
  }
}
