"use strict";

module.exports = {
  components: {
    schemas: {
      User: {
        type: "object",
        required: ["name", "last_name", "email", "password"],
        properties: {
          name: {
            type: "string"
          },
          last_name: {
            type: "string"
          },
          email: {
            type: "string"
          },
          password: {
            type: "string"
          }
        }
      },
      Patient: {
        type: "object",
        required: ["name", "last_name"],
        properties: {
          name: {
            type: "string"
          },
          last_name: {
            type: "string"
          },
          age: {
            type: "number"
          },
          gender: {
            type: "string"
          },
          image: {
            type: "string"
          },
          email: {
            type: "string"
          },
          phone: {
            type: "number"
          }
        }
      },
      Appointment: {
        type: "object",
        required: ["date"],
        properties: {
          date: {
            type: "string"
          },
          notes: {
            type: "string"
          },
          emotional_data: {
            type: "array"
          }
        }
      }
    }
  }
};