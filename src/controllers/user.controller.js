const User = require("../models/User")

const createUser = async (req, res) => {
    const { name, last_name, email, password } = req.body
    const newUser = new User({ name, last_name, email, password: User.encrypyPassword(password) });
    const newUserCreated = await newUser.save()
    res.status(200).json(newUserCreated)
}
const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
}
const getUserByEmail = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {

        })
}

const updateUser = (req, res) => {

}
const deleteUser = (req, res) => {

}