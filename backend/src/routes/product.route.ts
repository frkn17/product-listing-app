import express, { Request, Response } from 'express';
import { getProductsWithOptionalFilters } from '../services/product.service';
import { getGoldPrice } from '../services/goldPrice.service';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await getProductsWithOptionalFilters(req.query);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
