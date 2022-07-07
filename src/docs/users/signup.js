module.exports = {
  "post": {
    "tags": ["User"],
    "description": "Creates a new user",
    "operationId": "create",
    "parameters": [
      {
        "name": "User",
        "in": "path",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/User"
            }
          }
        }
      }
    ],
    "responses": {
      "200": {
        "description": "User registered"
      },
      "400": {
        "description": "User could not be register"
      }
    }
  }
}
