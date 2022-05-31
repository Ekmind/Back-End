import { Schema, model } from "mongoose";

const Role = new Schema({
    name: String
}, {
    versionKey: false
})


export default model('Role', Role)