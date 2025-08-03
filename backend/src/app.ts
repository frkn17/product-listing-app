import express, { Application } from 'express';
import cors from 'cors';
import productRoutes from './routes/product.route'

const app: Application = express();

//Middleware
app.use(cors({ origin: "*" }))
app.use(express.json());

app.use('/products', productRoutes);

export default app;