module.exports = {
  get: {
    tags: ["Patient"],
    description: "Deactivates a patient",
    operationId: "deactivatePatient",
    responses: {
      200: {
        description: "Patient deactivated"
      },
      400: {
        description: "Patient could not be deactivated"
      },
      404: {
        description: "Patient not found"
      }
    }
  }
}
