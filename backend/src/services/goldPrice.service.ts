import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';

const GOLDAPI_KEY = process.env.GOLDAPI_KEY!;
const GOLDAPI_URL = process.env.GOLDAPI_URL!;
const CACHE_TTL = Number(process.env.CACHE_TTL_SECONDS) || 600;

let cachedGoldPrice: number | null = null;
let cacheTimeStamp: number | null = null;

export async function getGoldPrice(): Promise<number>{
    const now = Date.now();

    const isCacheValid = cachedGoldPrice != null
        && cacheTimeStamp != null
        && (now - cacheTimeStamp < CACHE_TTL * 1000);

    //Returning cached value if valid
    if(isCacheValid && cachedGoldPrice !== null) {
        return cachedGoldPrice;
    }

    try {
        const response = await axios.get(GOLDAPI_URL, {
            headers: {'x-access-token': GOLDAPI_KEY, 'Content-Type': 'application/json'}
        });

        const goldPrice = response.data.price;

        if (typeof goldPrice !== 'number'){
            throw new Error('Invalid gold price from API');
        }

        cachedGoldPrice = goldPrice;
        cacheTimeStamp = now;

        return goldPrice;
    } catch(error){
        console.error('Failed to fetch gold price:', error);

        if (cachedGoldPrice !== null) return cachedGoldPrice;

        throw new Error('Unable to fetch gold price and no cache available');
    }
}