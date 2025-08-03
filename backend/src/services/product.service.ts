import productsData from '../data/products.json';
import { Product, ProductData } from '../models/Product';
import { ParsedFilters, ProductFilterQuery } from '../types/definitions';
import { parseProductFilters } from '../utils/parseProductFilters.utils';
import { getGoldPrice } from './goldPrice.service';

export async function getProductsWithOptionalFilters(query: ProductFilterQuery){
  const goldPrice = await getGoldPrice();
  const {filters, filtersExist} = parseProductFilters(query);
  return filtersExist ? getFilteredProducts(filters, goldPrice) : getAllProducts(goldPrice);

}


export function getAllProducts(goldPrice: number): ReturnType<Product['toJson']>[] {
  return productsData.map((data: ProductData) => {
    const product = new Product(data, goldPrice);
    return product.toJson();
  });
}

export function getFilteredProducts(filters: ParsedFilters = {}, goldPrice:number): ReturnType<Product['toJson']>[] {
  const { minPrice, maxPrice, minPopularity, maxPopularity } = filters;

  return productsData
    .map((data: ProductData) => new Product(data, goldPrice))
    .filter(product => {
      const price = parseFloat(product.price);
      const popularity = product.popularityOutOfFive;

      if (minPrice !== undefined && price < minPrice) return false;
      if (maxPrice !== undefined && price > maxPrice) return false;
      if (minPopularity !== undefined && popularity < minPopularity) return false;
      if (maxPopularity !== undefined && popularity > maxPopularity) return false;

      return true;
    })
    .map(product => product.toJson());
}