import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import { DATABASE_URL } from './config/config';
import apiRouter from './routes';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger('dev'));

mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,});

app.use(apiRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});