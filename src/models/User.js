import * as bcrypt from "bcrypt";
import { Schema, model } from "mongoose";


const User = new Schema({
    name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: [true, 'Email required']

    },
    password: {
        type: String,
        required: [true, 'Password required'],
        maxlength: 200
    },
    role: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],
    // patients: [{
    //     ref: "Patients",
    //     type: Schema
    // }]
}, {
    timestamps: true,
    versionKey: false
})



User.statics.encryptPassword = async (password) => {
    const salt = bcrypt.genSaltSync(10)
    return await bcrypt.hashSync(password, salt)
}

User.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compareSync(password, receivedPassword)
}

/*function hash(password) {
    const salt = bcrypt.genSaltSync(12)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

function compare(password, hash) {
    return bcrypt.compareSync(password, hash)
}

console.log(hash('Secret'))
console.log(compare('Secret', '$2b$12$.GrSHIFXsoRZP9o185lAiuubm4vJS6GeC.r8wItIUaRDOS7f1ELAO'))*/


export default model('User', User)