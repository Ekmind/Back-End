import bcrypt from "bcryptjs/dist/bcrypt";
import { Schema, model } from "mongoose";
import Role from "./Role";

const User = new Schema({
    name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    role: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
})

User.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

User.statics.comparePassword = async (password, receivedPassword) => {
    await bcrypt.compare(password, receivedPassword)
}


export default model('User', User)