import cors from 'cors';
import express from 'express';
import router from './routers/index.router.js';
// import createDoc from './helpers/swagger.doc.js';
import errorHandler from './helpers/error.handler.js';

const app = express();

// config EJS
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));

// createDoc(app);

app.use(router);

app.use(errorHandler);

export default app;
