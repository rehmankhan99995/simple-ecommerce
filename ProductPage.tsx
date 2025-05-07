import { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';
import QuantityControl from '../components/QuantityControl';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };
  
  const handleIncrease = () => {
    setQuantity(q => q + 1);
  };
  
  const handleDecrease = () => {
    setQuantity(q => (q > 1 ? q - 1 : 1));
  };
  
  return (
    <div>
      <button 
        onClick={() => navigate('/')}
        className="text-gray-600 hover:text-blue-600 transition-colors mb-6 inline-flex items-center"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to Products
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden bg-white shadow-md">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Quantity</h3>
            <QuantityControl
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
          </div>
          
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          >
            <ShoppingCart size={20} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;