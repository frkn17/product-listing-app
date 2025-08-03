import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/ProductCarousel';
import ProductFilters from './components/ProductFilters'; // This is the component
import { useProducts, type ProductFilters as FilterType } from './hooks/useProducts'; // Import the type


const App: React.FC = () => {
  // Local state for filters
  const [filters, setFilters] = useState<FilterType>({});
  const { products, loading, error } = useProducts(filters);


  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-8 bg-white">
      <Header />
      {/* Filters */}
      <ProductFilters filters={filters} onChange={setFilters} />

      {/* Data state */}
      {loading && <p className="text-center mt-6">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-6">Error: {error}</p>}

      {/* Product Carousel */}
      {!loading && !error && <Carousel products={products} />}
    </div>
  );
};

export default App;
