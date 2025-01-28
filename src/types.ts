export interface MenuItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: 'starters' | 'mainCourse' | 'appetizers' | 'desserts';
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}