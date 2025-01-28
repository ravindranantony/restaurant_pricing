import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import MenuItem from './MenuItem';

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-orange-800 border-b-2 border-orange-800 pb-2">
        {title}
      </h2>
      <div className="grid gap-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;