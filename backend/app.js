// Import the Express module
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

app.use(express.json()); //convert string to json
app.use(express.urlencoded({ extended: true })); // our data is of which type
dbConnection();
app.use(errorMiddleware);
app.use('/api/v1/reservation/', reservationRouter);

export default app;
