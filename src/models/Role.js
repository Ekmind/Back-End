const { Schema, model } = require("mongoose");

const ROLES = ['user', 'moderator', 'admin']

const Role = new Schema({
    name: String
}, {
    versionKey: false
})


model('Role', Role)