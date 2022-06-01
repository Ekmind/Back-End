import User from '../models/User'
import { ROLES } from "../models/Role";

export const checkDuplicatedEmail = async (req, res, next) => {
    const email = await User.findOne({ email: req.body.email })

    if (email) return res.status(400).json({ message: 'Email already in use' })

    next();
}
export const checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
        for (let i = 0; i < req.body.role.length; i++) {
            if (!ROLES.includes(req.body.role[i])) {
                console.log(req.body.role[i])
                return res.status(400).json({
                    message: `Role ${req.body.role[i]} does not exist`
                })
            }
        }
    }
    console.log(ROLES)
    console.log(req.body.role)
    next();
}
