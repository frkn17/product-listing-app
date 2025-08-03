import { ProductImageSet, ProductResponse } from "../types/definitions";

export interface ProductData {
    name: string;
    popularityScore: number;
    weight: number;
    images: ProductImageSet;
}

export class Product {
    name: string;
    popularityScore: number;
    weight: number;
    images: ProductImageSet;
    goldPrice: number;

    constructor(data: ProductData, goldPrice: number){
        this.name = data.name;
        this.popularityScore = data.popularityScore;
        this.weight = data.weight;
        this.images = data.images;
        this.goldPrice = goldPrice;
    }

    // Price = (popularityScore + 1) * weight * goldPrice
    get price(): string {
        const priceValue = (this.popularityScore + 1) * this.weight * this.goldPrice;
        return priceValue.toFixed(2);
    }

    // for text like 4.6/5
    get popularityOutOfFive(): number {
        return parseFloat((this.popularityScore * 5).toFixed(1));
    }

    //for stars / 4.6 -> 4.5 
    get roundedPopularity(): number { 
        return Math.round(this.popularityOutOfFive * 2) / 2;
    }

    toJson(): ProductResponse {
        return {
            name: this.name,
            weight: this.weight,
            images: this.images,
            price: this.price,
            popularityOutOfFive: this.popularityOutOfFive,
            roundedPopularity: this.roundedPopularity,
        }
    }

}