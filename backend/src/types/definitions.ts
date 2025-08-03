export interface ProductImageSet{
    yellow: string;
    rose: string;
    white: string;
}

export interface ProductFilterQuery {
    minPrice?: string;
    maxPrice?: string;
    minPopularity?: string;
    maxPopularity?: string;
}

export interface ParsedFilters {
    minPrice?: number;
    maxPrice?: number;
    minPopularity?: number;
    maxPopularity?: number;
}


export interface ProductResponse {
    name: string;
    weight: number;
    images: ProductImageSet;
    price: string;
    popularityOutOfFive: number;
    roundedPopularity: number;
}