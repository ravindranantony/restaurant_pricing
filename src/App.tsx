import React, { useState } from 'react';
import { menuItems } from './data/menuData';
import MenuSection from './components/MenuSection';
import { X } from 'lucide-react';

function App() {
  const [showTerms, setShowTerms] = useState(false);

  const groupedItems = menuItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>);

  const categoryTitles = {
    starters: 'Starters',
    mainCourse: 'Main Course',
    appetizers: 'South Indian Appetizers',
    desserts: 'Desserts'
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-900 mb-4">
            The South Indian
          </h1>
        </header>

        <div className="space-y-12">
          {Object.entries(categoryTitles).map(([category, title]) => (
            <MenuSection
              key={category}
              title={title}
              items={groupedItems[category] || []}
            />
          ))}
        </div>

        <footer className="mt-12 text-center text-xs text-gray-500">
          <button 
            onClick={() => setShowTerms(true)}
            className="hover:text-orange-700 underline"
          >
            Terms & Conditions
          </button>
        </footer>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button 
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
            <div className="prose prose-sm">
              <h3 className="text-lg font-semibold mb-2">Dynamic Pricing Policy</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our menu prices are subject to variation during peak dining hours:
              </p>
              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
                <li>10% increase applies between 18:00-19:00</li>
                <li>14% increase applies between 19:00-20:00</li>
                <li>12.5% increase applies between 20:00-21:30</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4 mb-2">General Terms</h3>
              <p className="text-sm text-gray-600">
                All prices are inclusive of VAT. We reserve the right to modify our pricing structure 
                and menu items without prior notice. The restaurant may refuse service to anyone 
                not complying with our policies.
              </p>
              <h3 className="text-lg font-semibold mt-4 mb-2">Privacy Policy</h3>
              <p className="text-sm text-gray-600">
                We respect your privacy and are committed to protecting any personal information 
                collected during your visit to our restaurant. Any information collected is used 
                solely for improving our services and customer experience.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;