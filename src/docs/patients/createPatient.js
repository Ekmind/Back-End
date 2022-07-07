module.exports = {
  post: {
    tags: ["Patient"],
    description: "Creates a new patient",
    operationId: "createPatient",
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
        description: "Patient Created"
      },
      400: {
        description: "Patient could not be created"
      },
      404: {
        description: "Doctor not found"
      }
    }
  }
}
