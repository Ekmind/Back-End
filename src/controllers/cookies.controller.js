module.exports.get_cookie = async (req, res) => {
    const cookies = req.cookies['jwt'];
    try {
        if (cookies) return res.json(cookies);

        return res.json('No cookies were found');
    } catch (err) {
        const errors = handleErrors(err);
        console.log({ message: 'Server Error', error: errors });
    }
}

module.exports.set_cookie = async (req, res) => {
    res.cookie('name', 'Carlos', { httpOnly: true });
}