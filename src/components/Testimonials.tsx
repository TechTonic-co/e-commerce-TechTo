import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    user: "Emily R",
    image: "/P2.png",
    rating: 5,
    comment:
      "The Apple Watch perfectly balances style and advanced health tracking. Its crash detection feature gives me peace of mind during my busy days.",
    date: "July 10, 2025",
  },
  {
    id: 2,
    user: "Alexander V",
    image: "/P1.png",
    rating: 4,
    comment:
      "This platform’s user interface made it easy for me to find exactly what I needed quickly. The seamless checkout process and fast delivery exceeded my expectations.",
    date: "July 7, 2025",
  },
  {
    id: 3,
    user: "Haruka T",
    image: "/P3.png",
    rating: 5,
    comment:
      "I appreciate the detailed product descriptions and transparent customer reviews available, which helped me make a confident purch",
    date: "July 3, 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#162a42] mb-4">
            Loved by Thousands Worldwide
          </h2>
          <p className="text-[#9b8879] text-base sm:text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have upgraded their lives with our AI-powered products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#c67734] mb-4" />

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? 'text-[#c67734] fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-[#162a42] mb-6 leading-relaxed italic">
                "{review.comment}"
              </p>

              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.user}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#162a42]"
                />
                <div className="ml-4">
                  <p className="font-semibold text-[#162a42]">{review.user}</p>
                  <p className="text-[#9b8879] text-sm">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
