import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes/index.js';
import jwt from 'jsonwebtoken';
import auth from './auth/authController.js';

// Setup jsonwebtoken


// Setup mongodb server
const app = express();

mongoose.connect('mongodb://localhost:27017/db_project', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected!"));

// Middleware
app.use(cors());
app.use(express.json());
app.use('/product', route);
app.use('/login', route);

// Create response callback when staring app
app.listen('3000', () => console.log("Server is listening in port 3000."));
