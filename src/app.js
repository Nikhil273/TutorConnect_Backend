import express from 'express';
import cors from 'cors';
import cokieParser from 'cookie-parser';
import dotenv from 'dotenv';
// import signUp from './routes/Auth/singup.auth.routes';
// app.use('/api/register', signUp);

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cokieParser());





export default app;