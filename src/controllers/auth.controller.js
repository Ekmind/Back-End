import User from "../models/User"
import jtw from "jsonwebtoken"
import config from "../config"
import Role from "../models/Role"
const validator = require('validator');

export const signUp = async (req, res) => {
    const { name, last_name, email, password, role } = req.body

    const newUser = new User({
        name,
        last_name,
        email,
        password: await User.encryptPassword(password)
    })

    if (role) {
        const foundRoles = await Role.find({ name: { $in: role } })
        newUser.role = foundRoles.map(role => role._id)
    } else {
        const role = await Role.findOne({ name: 'user' })
        newUser.role = [role._id]
    }

    const savedUser = await newUser.save()


    const token = jtw.sign({ id: savedUser._id }, config.Secret, {
        expiresIn: "4h"
    })

    res.status(200).json({ token })
}


export const signIn = async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate('role')

    if (!userFound) return res.status(400).json({ message: 'User not found' })

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' })

    const token = jtw.sign({ id: userFound._id }, config.Secret, {
        expiresIn: "4h"
    })

    res.json({ token })
}


export const changeProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.userId, req.body)
        if (req.body.email) {
            const email = req.body.email
            const isEmail = (email) => {
                return validator.default.isEmail(email)
            }

            if (!isEmail(email)) return res.status(403).json({ message: 'Enter a valid email' })
        }

        if (req.body.password) {
            const password = await req.body.password

            if (password.length < 8) return res.status(403).json({ message: 'Password min 8 characters' })
            if (password.length > 24) return res.status(403).json({ message: 'Password max 24 characters' })

            const encryptedPass = await User.encryptPassword(password)

            console.log(encryptedPass)

            res.status(200).json({ mesasge: 'User updated - Password Encrypted' })
            return await User.findByIdAndUpdate(req.userId, {
                name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: encryptedPass,
            })
        }

        console.log(updatedUser)
        res.status(200).json({ message: 'User Updated' })

    } catch (error) {
        console.log(error)
    }
}