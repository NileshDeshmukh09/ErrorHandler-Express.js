import express from 'express';
import userRoutes from './routes/user.model.js';
const app = express();
const PORT = 4000;

app.use("/user" , userRoutes);

app.listen( PORT , ()=> {
    console.log(`Server is Running on http://localhost:${PORT}`)
})