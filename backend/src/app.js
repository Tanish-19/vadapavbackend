import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import newsRoutes from './routes/newsRoutes.js';
import './utils/cronJobs.js'; // Just importing runs the cron
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use('/api', newsRoutes);

app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static('public'));
app.use(cookieParser());

console.log('⏰ Running cron job: Fetching news every 10 min...');


export {  app}