import dotenv from 'dotenv';

dotenv.config({
    path: "./backend/.env",
});

export const Env = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
}