import { Minus, Plus } from 'lucide-react';

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: 'small' | 'medium';
}

const QuantityControl = ({ 
  quantity, 
  onIncrease, 
  onDecrease,
  size = 'medium'
}: QuantityControlProps) => {
  const buttonClasses = size === 'small' 
    ? 'w-6 h-6' 
    : 'w-8 h-8';

  const iconSize = size === 'small' ? 14 : 18;
  
  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
      <button 
        onClick={onDecrease}
        className={`${buttonClasses} flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors`}
        aria-label="Decrease quantity"
      >
        <Minus size={iconSize} />
      </button>
      <div className={`${buttonClasses} flex items-center justify-center text-gray-800 font-medium`}>
        {quantity}
      </div>
      <button 
        onClick={onIncrease}
        className={`${buttonClasses} flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors`}
        aria-label="Increase quantity"
      >
        <Plus size={iconSize} />
      </button>
    </div>
  );
};

export default QuantityControl;