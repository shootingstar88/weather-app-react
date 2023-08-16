import 'dotenv/config'
import express from 'express';
import indexRouter from './routes/index'
import apiRouter from './routes/routes'

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`)
});