import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/User"
import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token']
        console.log(token)

        if (!token) return res.status(403).json({ message: 'No token was provided' })

        const decoded = jwt.verify(token, config.Secret)
        req.userId = decoded.id

        const user = await User.findById(req.userId, { password: 0 })
        if (!user) return res.status(404).json({ message: 'No user found' })
        console.log(user)
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
};

export const isModerator = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const role = await Role.find({ _id: { $in: user.role } });

    for (let i = 0; i < role.length; i++) {
        if (role[i].name === 'moderator') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Moderator permissions required' })
}
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const role = await Role.find({ _id: { $in: user.role } });

    for (let i = 0; i < role.length; i++) {
        if (role[i].name === 'admin') {
            next();
            return;
        }
    }
    return res.status(403).json({ message: 'Admin permissions required' })
}

