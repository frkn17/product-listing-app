import express, { Application } from 'express';
import cors from 'cors';
import productRoutes from './routes/product.route'

const app: Application = express();

//Middleware
app.use(cors({ origin: "https://pro-rjkb.onrender.com" }))
app.use(express.json());

app.use('/products', productRoutes);

export default app;