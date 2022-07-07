import morgan from "morgan";
import express from "express";
import pkg from '../package.json';
import hubRoutes from "./routes/hub.routes";
import { createRoles } from "./libs/initialSetup";
const cookieParser = require('cookie-parser');
const CORS = require('cors');

const app = express();
createRoles();

app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(express.json());
app.use(CORS());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: "Ekmind API"
    })
})

app.use('/api/', hubRoutes);

export default app;