import express from 'express';
import signUp from './routes/Auth/singup.auth.routes';


const app = express();

app.use('/api/register', signUp)