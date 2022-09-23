import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// Routes imports
import { router } from './routes';

// Configurations imports
import db from './config/mongo';

// constant definitions
const PORT = process.env.PORT || 3000;
const app = express();

// app uses
app.use(express.json());
app.use(cors());
app.use(router);

// DB connect
db()
  .then(() => console.log('Conexión con la base de datos lista.'))
  .catch(err => console.error(`Error conectando a la base de datos, ${err}`));

// server start
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
