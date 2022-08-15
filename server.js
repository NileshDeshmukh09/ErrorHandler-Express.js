import express from 'express';
import errorMiddleware from './middlewares/Error.js';
import userRoutes from './routes/user.routes.js';
import { connectDB } from './configs/db.config.js';
const app = express();
const PORT = 4000;

app.use("/user" , userRoutes);

connectDB();

app.listen( PORT , ()=> {
    console.log(`Server is Running on http://localhost:${PORT}`)
});

app.use( errorMiddleware );