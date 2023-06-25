import express from 'express';
import routes from '../routes/ClientRoutes';

const app = express();

app.use('/users', routes);

export default app;