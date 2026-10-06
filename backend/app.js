import express from 'express';
import helmet from "helmet";
import cors from "cors";
import {Env} from "./config/env.js";
import {connectDB} from "./config/db.js";

const app = express();

// Config
connectDB()
    .catch()

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(cors());


// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
        status: 200,
    })
})


app.listen(Env.PORT, () => {
    console.log(`Server started on http://localhost:${Env.PORT}`);
});

