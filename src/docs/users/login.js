module.exports = {
  "post": {
    "tags": ["User"],
    "description": "Authenticates a user",
    "operationId": "authenticate",
    "parameters": [
      {
        "name": "User",
        "in": "path",
        "content": {
          "application/json": {
            "auth": {
              "email": "string",
              "password": "string"
            }
          }
        }
      }
    ],
    "responses": {
      "200": {
        "description": "User was logged in successfully"
      },
      "400": {
        "description": "User can not be logged in"
      }
    }
  },
  "get": {
    "tags": ["User"],
    "description": "Brings the actual session",
    "operationId": "getUser",
    "responses": {
      "200": {
        "description": "User is logged in"
      },
      "400": {
        "description": "Can not bring user credentials"
      },
      "403": {
        "description": "You're not logged in"
      }
    }
  }
}
