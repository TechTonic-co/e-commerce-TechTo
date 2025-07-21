import React from 'react';
import { useApp } from '../contexts/AppContext'; // Adjust path if needed
import type { Page } from '../types'; // Assuming you have a Page type defined

const categories = [
  {
    id: 1,
    name: "Play Station",
    image: "/Laptop.png",
    description: "Which can vary depending on the brand and model electronic device.",
    cta: "Shop now",
    span: "lg:col-span-4 lg:row-span-2",
  },
  {
    id: 2,
    name: "Special Discount",
    image: "/Phone.png",
    cta: "Shop Now",
    offer: "UP TO 50% OFF",
    span: "lg:col-span-2",
  },
  {
    id: 3,
    name: "Hot Deals",
    image: "/Headphone.png",
    cta: "Shop Now",
    offer: "UP TO 30% OFF",
    span: "lg:col-span-2",
  },
  {
    id: 4,
    name: "Hero Camera",
    image: "/Camera.png",
    cta: "SHOW NOW",
  },
  {
    id: 5,
    name: "Game",
    image: "/Game.png",
    cta: "SHOW NOW",
  },
  {
    id: 6,
    name: "Smart Watch",
    image: "/Smartwatch.png",
    cta: "SHOW NOW",
  },
];

// Helper: convert category name to kebab-case string matching Page type
function getPageKey(name: string): Page {
  return name.toLowerCase().replace(/\s+/g, '-') as Page;
}

export default function Categories() {
  const { dispatch } = useApp();

  return (
    <section className="py-16 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#162a42] mb-4">Product Segments</h2>
          <p className="text-[#9b8879] text-lg max-w-2xl mx-auto">
            Explore & Shop from a broader range of innovative devices that fit today’s fast-moving digital lifestyle.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4">
          {categories.map((cat) => {
            const pageKey = getPageKey(cat.name);

            return (
              <div
                key={cat.id}
                className={`relative overflow-hidden rounded-2xl group shadow-md ${cat.span || 'lg:col-span-2'}`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent transition duration-300" />

                <div className="absolute z-10 bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">{cat.name}</h3>
                  {cat.offer && <p className="text-sm">{cat.offer}</p>}

                  <button
                    onClick={() => dispatch({ type: 'SET_PAGE', payload: 'shop' })}
                    className="mt-2 inline-block text-sm px-4 py-1.5 rounded-md bg-white text-black hover:bg-gray-200 hover:text-white transition"
                  >
                    {cat.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
