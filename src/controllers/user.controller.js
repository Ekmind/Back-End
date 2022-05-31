import User from "../models/User"

export const createUser = async (req, res) => {
    const { name, last_name, email, password } = req.body
    const newUser = new User({ name, last_name, email, password });
    const newUserCreated = await newUser.save()
    res.status(200).json(newUserCreated)
}
export const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
}
export const getUserByEmail = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {

        })
}
export const SignIn = (req, res) => {

}

export const updateUser = (req, res) => {

}
export const deleteUser = (req, res) => {

}