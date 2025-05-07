import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors inline-block"
        >
          Start Shopping
        </Link>
      </div>
    );
  }
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {cartItems.map(item => (
              <CartItem
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="mb-4 pb-4 border-b border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
            </div>
            
            <div className="flex justify-between mb-6">
              <span className="text-gray-800 font-semibold">Total</span>
              <span className="text-blue-600 font-bold">${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors mb-4"
            >
              Proceed to Checkout
            </button>
            
            <button
              onClick={clearCart}
              className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;