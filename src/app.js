import morgan from "morgan";
import express from "express";
import pkg from '../package.json';
import userRoutes from "./routes/User.routes";
import authRoutes from "./routes/Auth.routes";
import { createRoles } from "./libs/InitialSetup";
import * as CORS from "cors";

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