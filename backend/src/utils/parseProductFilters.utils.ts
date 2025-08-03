import { ProductFilterQuery, ParsedFilters } from "../types/definitions";


export function parseProductFilters(query: ProductFilterQuery): {
    filters: ParsedFilters;
    filtersExist: boolean;
} {
    const filters: ParsedFilters = {};

    if (query.minPrice !== undefined) filters.minPrice = Number(query.minPrice);
    if (query.maxPrice !== undefined) filters.maxPrice = Number(query.maxPrice);
    if (query.minPopularity !== undefined) filters.minPopularity = Number(query.minPopularity);
    if (query.maxPopularity !== undefined) filters.maxPopularity = Number(query.maxPopularity);

    const filtersExist = Object.keys(filters).length > 0;

    return { filters, filtersExist };
}