const jwt = require('jsonwebtoken');
import User from '../models/User';
import Role from '../models/Role';
import { handleErrors } from "../errors/handler.error";
import cookieParser from 'cookie-parser';

//1h time in ms
const Time = (1000 * 60 * 60 * 3);

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


        console.log('User registered');
        res.header({ 'Access-Control-Allow-Credentials': true });
        res.cookie('jwt', token, { maxAge: Time, httpOnly: true });
        res.status(200).json('User registered');

    } catch (err) {
        const errors = handleErrors(err);
        console.log({ message: 'User could not be register', errors: errors })
        res.status(400).json({ message: 'User could not be register' });
    }
}

//Log In (User Authentication)
module.exports.login_post = async (req, res) => {
    res.header({ 'Access-Control-Allow-Credentials': true });
    try {

        const { email, password } = req.body;
        const user = await User.login(email, password);

        if (user) {

            const token = createToken(user._id);

            res.cookie('jwt', token, { httpOnly: true, maxAge: Time, sameSite: false, secure: false });
            console.log('User logged in');
            res.status(200).json({ message: 'User is logged in', user: user.name });
            return;

        } else {

            return res.json({ message: 'User not found' });
        }

    } catch (err) {

        const errors = handleErrors(err);
        console.log({ message: 'User can not be logged in', errors: errors });
        res.status(400).json({ Error: 'User can not be logged in' });
    }
}

//Get Logged User (User Credentials And Token)
module.exports.login_get = async (req, res) => {
    try {
        res.header({ 'Access-Control-Allow-Credentials': true });
        const token = req.cookies['jwt'];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const user = await User.findById({ _id: userId });

        console.log({ user: user, token: token });
        res.status(200).json({ message: 'User is logged in', user: user });
    } catch (err) {

        handleErrors(err);
        console.log({ Error: 'Can not bring user credentials' });
        res.json({ Error: 'Can not bring user credentials' });

    }
}

//Log Out (End User Session)
module.exports.logout_get = async (req, res) => {
    const token = req.cookies['jwt'];
    try {

        res.header({ 'Access-Control-Allow-Credentials': true });
        res.cookie('jwt', 'expired', { maxAge: 1 });
        console.log('Token:', token);
        res.status(200).json('User was logged out successfully');

    } catch (err) {

        handleErrors(err);
        console.log({ Error: 'User can not be logged out' });
        res.json({ Error: 'User can not be logged out' });

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
