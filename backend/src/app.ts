import express, { Application } from 'express';
import cors from 'cors';
import productRoutes from './routes/product.route'

const app: Application = express();

//Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

app.use('/products', productRoutes);

export default app;