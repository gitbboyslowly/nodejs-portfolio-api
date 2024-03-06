import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import saleRouter from './routers/sale.router';
import { dbConnect } from './configs/database.config';
dbConnect();

const app = express();

app.use(express.json());

// Enable CORS
app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200',
}));

app.use("/api/sale", saleRouter);

const port = 80;
app.listen(port, () => {
    console.log(`Website served on http://localhost:${port}`);
});
