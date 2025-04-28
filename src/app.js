import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import accountsRoute from './routes/accounts.js';
import contactsRoute from './routes/contacts.js';
import opportunitiesRoute from './routes/opportunities.js';
import { initFirestore } from './models/initFirestore.js';

dotenv.config();
initFirestore();                    // Firestore を初期化

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('CRM API is running 🚀'));

app.use('/api/accounts', accountsRoute);
app.use('/api/contacts', contactsRoute);
app.use('/api/opportunities', opportunitiesRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀  Server listening on port ${PORT}`)
);
