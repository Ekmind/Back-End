const jwt = require('jsonwebtoken');
import User from '../models/User';
import Role from '../models/Role';

//1h
const Time = (1000 * 60 * 60);

const handleErrors = (err) => {
    console.log(err.message, err.code);
    // console.log(err.code)
    let errors = {
        name: "",
        last_name: "",
        email: "",
        password: ""
    };

    //Wrong email
    if (err.message === 'No user with that email exist') {
        errors.email = 'User not found';
    }
    //Wrong password
    if (err.message === 'Wrong password') {
        errors.password = 'Incorrect password';
    }

    //Duplicated email error
    if (err.code === 11000) {
        errors.email = 'Email is already in use';
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(error => {
            // console.log(error.message)
            errors[error.path] = error.message;
        });

    }
    console.log(errors.email);
    return errors;
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "3h"
    });
}

module.exports.signup_post = async (req, res) => {
    const { name, last_name, email, password } = req.body;

    try {
        const role = await Role.findOne({ name: 'user' })
        const user = await User.create({ name, last_name, email, password, role });
        const token = createToken(user._id);


        res.cookie('jwt', token, { httpOnly: true, maxAge: Time })
        res.status(201).json({ user: user, token: token });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: Time })
        res.status(200).json({ user: user, token: token })

    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

module.exports.logout_get = async (req, res) => {
    const token = req.cookies['jwt']
    console.log('Token:', token)

    res.cookie('jwt', '', { maxAge: 1 })
    res.status(200).json('User was logged out successfully')
}

module.exports.create_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = await req.body
    try {
        const newPatient = await User.updateOne({ _id: req.userId }, {
            $push: {
                patients: [{
                    name: name,
                    last_name: last_name,
                    age: age,
                    gender: gender,
                    image: image,
                    phone: phone,
                    email: email
                }]
            }
        });

        res.status(200).json({ patient: newPatient })
        return newPatient
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}

module.exports.update_patient = async (req, res) => {
    const { name, last_name, age, gender, image, phone, email } = await req.body
    try {
        console.log(await req.params._id)
        const newPatient = await User.updateOne({ _id: req.params._id }, {
            $set: {
                patients: [{
                    name: name,
                    last_name: last_name,
                    age: age,
                    gender: gender,
                    image: image,
                    phone: phone,
                    email: email
                }]
            }
        });

        res.status(200).json({ patient: newPatient })
        return newPatient
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ errors });
    }
}