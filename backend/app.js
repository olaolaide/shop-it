import express from 'express';
import helmet from "helmet";
import cors from "cors";
import {Env} from "./config/env.js";
import {connectDB} from "./config/db.js";
import productRoute from "./routes/product.route.js";

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
app.use("/api/products", productRoute);
app.use((req, res) => {
    res.status(404).send('Not Found');
});


app.listen(Env.PORT, () => {
    console.log(`Server started on http://localhost:${Env.PORT}`);
});

