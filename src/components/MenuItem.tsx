import React, { useEffect, useState } from 'react';
import { MenuItem as MenuItemType } from '../types';
import { calculatePrice } from '../utils/priceCalculator';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [currentPrice, setCurrentPrice] = useState(calculatePrice(item.basePrice));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPrice(calculatePrice(item.basePrice));
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [item.basePrice]);

  return (
    <div className="flex justify-between items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-1">{item.description}</p>
      </div>
      <div className="ml-4">
        <p className="text-lg font-bold text-orange-600">
          {currentPrice} Kr
        </p>
        {currentPrice !== item.basePrice && (
          <p className="text-sm text-gray-500 line-through">
            {item.basePrice} Kr
          </p>
        )}
      </div>
    </div>
  );
}

export default MenuItem;