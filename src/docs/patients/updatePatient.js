module.exports = {
  patch: {
    tags: ["Patient"],
    description: "Updates a patient",
    operationId: "updatePatient",
    parameters: [
      {
        name: "Patient",
        in: "path",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Patient"
            }
          }
        }
      }
    ],
    responses: {
      200: {
        description: "Patient updated"
      },
      400: {
        description: "Patient could not be updated"
      },
      404: {
        description: "Patient not found"
      }
    }
  }
}
