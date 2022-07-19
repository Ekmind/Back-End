import morgan from "morgan";
import express from "express";
import pkg from '../package.json';
import hubRoutes from "./routes/hub.routes";
import cookieRoutes from "./routes/cookie.routes"
import { createRoles } from "./libs/initialSetup";
import { handleErrors } from "./errors/handler.error";
const cookieParser = require('cookie-parser');
const CORS = require('cors');

const app = express();
createRoles();

app.use(CORS({
    origin: ['http://localhost:4200'],
    credentials: true
}));
app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: "Ekmind API"
    })
})

app.use('/api/', hubRoutes);
app.use('/cookies/', cookieRoutes);

export default app;