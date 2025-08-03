## Product Catalog API

A simple RESTful API for serving product data with dynamic gold price calculation and filtering capabilities.

---

### Features
- Serves product data from a static JSON file
- Calculates product price dynamically based on live gold price (per gram of pure gold in USD)
- Supports filtering products by price and popularity
- In-memory caching for gold price to reduce API calls and improve performance
- TypeScript based with clean architecture

---

## Getting Started

### Prerequisites
- Node.js (>= 16)
- npm or yarn
- Gold price API key (e.g. from goldapi.io)

### Installation
Clone the repo:

```bash
git clone https://github.com/frkn17/backend.git
cd backend
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Create a `.env` file in the root:

```env
PORT=3000
GOLDAPI_KEY=your_goldapi_key_here
GOLDAPI_URL=https://www.goldapi.io/api/XAU/USD
CACHE_TTL_SECONDS=600
```

---

### Running the Server

```bash
npm run dev
# or
yarn dev
```

The server will start at [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

### GET /products
Fetch all products or filtered products based on query params.

#### Query Parameters (optional)
| Parameter      | Description                  | Type   |
| -------------- | --------------------------- | ------ |
| minPrice       | Minimum price filter         | string |
| maxPrice       | Maximum price filter         | string |
| minPopularity  | Minimum popularity filter    | string |
| maxPopularity  | Maximum popularity filter    | string |

#### Example
```bash
GET /products?minPrice=100&maxPrice=500&minPopularity=3&maxPopularity=5
```

#### Response
```json
[
  {
    "name": "Engagement Ring 1",
    "weight": 2.1,
    "images": {
      "yellow": "https://...",
      "rose": "https://...",
      "white": "https://..."
    },
    "price": "233.10",
    "popularityOutOfFive": 4.3,
    "roundedPopularity": 4.5
  }
]
```

---

## Project Structure Overview

- `src/routes`: Express routes
- `src/services`: Business logic including fetching gold price & product filtering
- `src/models`: Product data model and price calculation
- `src/utils`: Helper functions like filter parsing
- `src/types`: TypeScript type definitions
- `src/data`: Static JSON product data

---

## Caching
Gold price is cached in-memory for a configurable time (`CACHE_TTL_SECONDS` in `.env`) to limit external API calls.

---

## Notes
- The gold price is fetched live from the configured API (`GOLDAPI_URL`) and used to calculate product prices on each request.
- The filtering happens server-side based on query parameters.
- The API returns products with prices calculated dynamically based on current gold price.

---

## License
MIT
