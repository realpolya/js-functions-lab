/* --------------------------------Imports--------------------------------*/
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import logger from 'morgan';
import db from './db/connection.js'; // db = mongoose.connection

// routes
import trackRouter from './routes/route-tracks.js';

/* --------------------------------Express & Mongoose--------------------------------*/

const app = express();
const PORT = process.env.port || 3000;

db.on('connected', () => {
    console.clear();
    console.log(chalk.blue(`Connected to MongoDB ${db.name}.`));

    app.listen(PORT, () => {
        console.log(chalk.green(`The express app is ready on port ${PORT}!`));
    });
});

/* --------------------------------Middleware--------------------------------*/

// Cross Origin Resouce Sharing – CORS
app.use(cors()); // allow requests from anywhere

app.use(express.json());
app.use(logger('dev'));

/* --------------------------------Routes--------------------------------*/

app.use('/tracks', trackRouter);