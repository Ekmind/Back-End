import jwt from "jsonwebtoken";
import config from "../config";
import { handleErrors } from "../errors/handler.error";
import Role from "../models/Role";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['jwt'];
        // console.log('provided token: ' + token)

        if (!token) return res.status(403).json({ message: 'No token was provided' });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: 'No user found' });
        // console.log('Token owner: ' + user)
        next();
    } catch (error) {
        const errors = handleErrors(error)
        console.log(errors)
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

export const requireAuth = (res, req, next) => {
    const token = req.cookies['jwt'];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(403).json('Unauthorized')
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        return res.status(400).json('Not Authorized');
    }
}

export const checkUser = (req, res, next) => {
    const token = req.cookies['jwt'];
    try {
        if (token) {
            jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
                if (err) {
                    console.log(err.message);
                    next();
                } else {
                    console.log(decodedToken);
                    let user = await User.findById(decodedToken.id);
                    res.locals.user = user;
                    next();
                }
            })
        }
    } catch (error) {
        console.log(error);
    }
}

export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const role = await Role.find({ _id: { $in: user.role } });

    for (let i = 0; i < role.length; i++) {
        if (role[i].name === 'moderator') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Moderator permissions required' });
}
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const role = await Role.find({ _id: { $in: user.role } });

    for (let i = 0; i < role.length; i++) {
        if (role[i].name === 'admin') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Admin permissions required' });
}