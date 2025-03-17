import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from '../db/db.js';
import { errorMiddleware } from '../error/error.js';
import reservationRoute from '../routes/reservationRoute.js';
import adminRoutes from '../routes/adminRoutes.js';
import contactRoutes from '../routes/contactRoutes.js';

const app = express();

dotenv.config({path: './config/config.env'});

// Enable detailed logging for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Request headers:', req.headers);
  next();
});

// Simple CORS setup for development
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

dbConnection();

// API routes
app.use('/api/v1/reservation', reservationRoute);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/contacts', contactRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'API is working!' });
});

// Error middleware should be the last middleware to use
app.use(errorMiddleware);

export default app;