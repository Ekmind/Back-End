const morgan = require("morgan")
const express = require("express")
const pkg = require('../package.json')
const userRoutes = require("./routes/user.routes")
const authRoutes = ("./routes/auth.routes")
const createRoles = require("./libs/initialSetup")
const CORS = require('cors')

const app = express();
createRoles();

app.set('pkg', pkg)
app.use(morgan('dev'));
app.use(express.json())
app.use(CORS())

app.get('/test', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: "Ekmind API"
    })
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

export default app;