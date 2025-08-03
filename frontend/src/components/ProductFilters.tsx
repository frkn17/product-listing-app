import React from 'react';

export interface ProductFiltersProps {
  filters: {
    minPrice?: number;
    maxPrice?: number;
    minPopularity?: number;
    maxPopularity?: number;
  };
  onChange: (filters: ProductFiltersProps['filters']) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ filters, onChange }) => {
  const handleChange = (key: keyof ProductFiltersProps['filters'], value: number) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="w-full max-w-4xl px-6 py-4 mb-8 rounded-xl backdrop-blur-sm bg-white/60 border border-gray-200 shadow-md flex flex-col gap-6 sm:flex-row sm:justify-around">
      {/* Price Inputs */}
      <div className="flex flex-col text-sm w-full max-w-[180px]">
        <label htmlFor="minPrice" className="text-gray-700 mb-1">Min Price ($)</label>
        <input
          type="number"
          id="minPrice"
          value={filters.minPrice ?? ''}
          min={0}
          onChange={(e) => handleChange('minPrice', Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col text-sm w-full max-w-[180px]">
        <label htmlFor="maxPrice" className="text-gray-700 mb-1">Max Price ($)</label>
        <input
          type="number"
          id="maxPrice"
          value={filters.maxPrice ?? ''}
          min={0}
          onChange={(e) => handleChange('maxPrice', Number(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Popularity Sliders */}
      <div className="flex flex-col text-sm w-full max-w-[180px]">
        <label htmlFor="minPopularity" className="text-gray-700 mb-1">Min Popularity</label>
        <input
          type="range"
          min={0}
          max={5}
          step={0.1}
          value={filters.minPopularity ?? 0}
          onChange={(e) => handleChange('minPopularity', Number(e.target.value))}
          className="accent-yellow-500"
        />
        <span className="text-xs text-gray-500 mt-1">{filters.minPopularity ?? 0}/5</span>
      </div>

      <div className="flex flex-col text-sm w-full max-w-[180px]">
        <label htmlFor="maxPopularity" className="text-gray-700 mb-1">Max Popularity</label>
        <input
          type="range"
          min={0}
          max={5}
          step={0.1}
          value={filters.maxPopularity ?? 5}
          onChange={(e) => handleChange('maxPopularity', Number(e.target.value))}
          className="accent-yellow-500"
        />
        <span className="text-xs text-gray-500 mt-1">{filters.maxPopularity ?? 5}/5</span>
      </div>
    </div>
  );
};

export default ProductFilters;
