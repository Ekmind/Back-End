import User from '../models/User';
import { ROLES } from "../models/Role";
const validator = require('validator');

export const checkDuplicatedEmail = async (req, res, next) => {
    const email = await User.findOne({ email: req.body.email });

    if (email) return res.status(400).json({ message: 'Email already in use' });

    next();
}

export const checkCredentialsExist = async (req, res, next) => {
    const email = await req.body.email;
    const password = await req.body.password;
    const isEmail = (email) => {
        return validator.default.isEmail(email);
    }

    if (!email || !password) return res.status(400).json({ message: 'Email or password missing' });

    if (!isEmail(email)) return res.status(403).json({ message: 'Enter a valid email' });

    next();
}

export const validatePasswordLength = async (req, res, next) => {
    const password = await req.body.password;

    if (password.length < 8) return res.status(403).json({ message: 'Min 8 characters' });
    if (password.length > 24) return res.status(403).json({ message: 'Max 24 characters' });

    next();
}

export const checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
        for (let i = 0; i < req.body.role.length; i++) {
            if (!ROLES.includes(req.body.role[i])) {
                console.log(req.body.role[i])
                return res.status(400).json({
                    message: `Role ${req.body.role[i]} does not exist`
                });
            }
        }
    }

    next();
}
