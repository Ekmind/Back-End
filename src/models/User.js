import * as bcrypt from "bcrypt";
const mongoose = require('mongoose');
const { isEmail } = require('validator');

//User model used to store date within the database
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        validate: [(name) => {
            const letters = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;
            if (!name.match(letters)) {
                return false;
            }
        }, 'Only alphabetical characters'],
        maxlength: [24, '24 characters max']
    },
    last_name: {
        type: String,
        required: [true, 'Please enter your last name'],
        validate: [(last_name) => {
            const letters = /^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;
            if (!last_name.match(letters)) {
                return false;
            }
        }, 'Only alphabetical characters'],
        maxlength: [24, '24 characters max']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'Please enter an email'],
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [8, 'Minimum password length is 6 characters'],
        maxlength: [24, 'Maximum password length is 24 characters']
    },
    role: [{
        ref: "Role",
        type: mongoose.Schema.Types.ObjectId
    }],
    isActive: { type: Boolean, default: true },
    patients: [{
        ref: "Patient",
        type: mongoose.Schema.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSaltSync(12);
    this.password = await bcrypt.hashSync(this.password, salt);
    next();
}
);

//Static method to login user
userSchema.statics.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (user) {
        const auth = await bcrypt.compareSync(password, user.password);
        if (auth) return user;

        throw Error('Wrong password');
    }

    throw Error('No user with that email exist');
}

const User = mongoose.model('user', userSchema);

export default User;