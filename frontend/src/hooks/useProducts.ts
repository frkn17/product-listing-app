import { useEffect, useState } from 'react';
import type { Product } from '../definitions/product';

const API_URL = 'http://localhost:3000/products';

export interface ProductFilters {
  minPrice?: number;
  maxPrice?: number;
  minPopularity?: number;
  maxPopularity?: number;
}

export function useProducts(filters: ProductFilters = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const query = new URLSearchParams();

        if (filters.minPrice !== undefined) query.append('minPrice', filters.minPrice.toString());
        if (filters.maxPrice !== undefined) query.append('maxPrice', filters.maxPrice.toString());
        if (filters.minPopularity !== undefined) query.append('minPopularity', filters.minPopularity.toString());
        if (filters.maxPopularity !== undefined) query.append('maxPopularity', filters.maxPopularity.toString());

        const url = `${API_URL}?${query.toString()}`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]); // re-fetch when filters change

  return { products, loading, error };
}
