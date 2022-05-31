import User from "../models/User"
import jtw from "jsonwebtoken"
import config from "../config"
import Role from "../models/Role"

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
    console.log(savedUser)

    const token = jtw.sign({ id: savedUser._id }, config.Secret, {
        expiresIn: "4h"
    })

    res.status(200).json({ token })
}


export const signIn = async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate('role')

    if (!userFound) return res.status(400).json({ message: 'User not found' })
    console.log(userFound)

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' })

    const token = tw.sign({ id: userFound._id }, config.Secret, {
        expiresIn: "4h"
    })

    res.json({ token })
}