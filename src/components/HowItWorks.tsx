import React from 'react';

export default function Brands() {
  const brandLogos = [
    '/Brands/BA1.svg',
    '/Brands/BA2.svg',
    '/Brands/BA3.svg',
    '/Brands/BA4.svg',
    '/Brands/BA5.svg',
    '/Brands/BA6.svg',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#162a42] mb-4">
            Powered by Leading Tech Brands
          </h2>
          <p className="text-[#9b8879] text-lg max-w-2xl mx-auto">
            We bring you next-generation innovative devices in partnership with the world’s foremost tech innovators.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
          {brandLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl p-4 flex items-center justify-center shadow hover:shadow-lg transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="w-[160px] h-[48px] object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
