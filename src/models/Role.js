import { Schema, model } from "mongoose";

export const ROLES = ['user', 'moderator', 'admin']

const Role = new Schema({
    name: String
}, {
    versionKey: false
})


export default model('Role', Role)