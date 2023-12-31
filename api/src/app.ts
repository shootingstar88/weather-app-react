import 'dotenv/config';
import express from 'express';
import indexRouter from './routes/index';
import apiRouter from './routes/routes';
import cors from 'cors';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}/health`)
});