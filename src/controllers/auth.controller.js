const jwt = require('jsonwebtoken');
import User from '../models/User';
import Role from '../models/Role';
import { handleErrors } from "../errors/handler.error";

//1h time in ms
const Time = (1000 * 60 * 60);

//Token creation function
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "3h"
    });
}

//Sign Up (User Registration)
module.exports.signup_post = async (req, res) => {
    const { name, last_name, email, password } = req.body;

    try {
        const role = await Role.findOne({ name: 'user' });
        const user = await User.create({ name, last_name, email, password, role });
        const token = createToken(user._id);


        console.log(user);
        res.cookie('jwt', token, { maxAge: Time, httpOnly: true });
        res.status(201).json({ user: user, token: token });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

//Log In (User Authentication)
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);

        console.log('User logged in');
        res.cookie('jwt', token, { httpOnly: true, maxAge: Time });
        res.status(200).json({ message: 'User was logged in successfully', user: user, token: token });

    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

//Get Logged User (User Credentials And Token)
module.exports.login_get = async (req, res) => {
    const token = req.cookies['jwt'];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const user = await User.findById({ _id: userId });

        console.log({ user: user, token: token });
        res.status(200).json({ message: 'User is logged in', user: user, token: token })
    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors);
    }
}

//Log Out (End User Session)
module.exports.logout_get = async (req, res) => {
    const token = req.cookies['jwt'];
    try {
        res.cookie('jwt', '', { maxAge: 1 });
        console.log('Token:', token);
        res.status(200).json('User was logged out successfully');

    } catch (err) {
        const errors = handleErrors(err);
        console.log(errors)
    }

}

//User Update (Modify User Credentials)
module.exports.user_update = async (req, res) => {
    const { name, last_name, email, password } = req.body
    const updatedUser = User.findOneAndUpdate(
        { _id: req.userId },
        {}
    )
}
