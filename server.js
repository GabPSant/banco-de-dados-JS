import express from 'express';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3306, () => console.log("Servidor iniciado na porta 3306"));