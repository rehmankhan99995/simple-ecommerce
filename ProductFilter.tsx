import { useState } from 'react';

interface ProductFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeCategory: string;
}

const ProductFilter = ({ categories, onFilterChange, activeCategory }: ProductFilterProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onFilterChange('')}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            activeCategory === '' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onFilterChange(category)}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;