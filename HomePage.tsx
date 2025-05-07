import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';
import { products } from '../data/products';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories
  const categories = useMemo(() => {
    return [...new Set(products.map(product => product.category))];
  }, []);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to SimpleShop</h1>
        <p className="text-gray-600">Discover our collection of high-quality products.</p>
      </div>
      
      <ProductFilter 
        categories={categories}
        onFilterChange={setSelectedCategory}
        activeCategory={selectedCategory}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;