import { useContext } from 'react';
import { Trash2 } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { Product } from '../types';
import QuantityControl from './QuantityControl';

interface CartItemProps {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleIncrease = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-gray-200">
      <div className="w-full sm:w-20 h-20 rounded-md overflow-hidden mb-4 sm:mb-0 mr-0 sm:mr-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow mb-4 sm:mb-0">
        <h3 className="font-medium text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-blue-600 font-semibold mt-1">${product.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-4">
        <QuantityControl
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          size="small"
        />
        
        <p className="font-medium text-gray-800">
          ${(product.price * quantity).toFixed(2)}
        </p>
        
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;