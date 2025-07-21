import React, { useEffect } from 'react';

export default function TrackOrderPage() {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-10 bg-white">
      <h1 className="text-4xl font-bold mb-4 text-left w-full max-w-2xl">Track Order</h1>

      <p className="text-lg text-gray-700 mb-6 max-w-2xl text-left">
        To track your order please enter your Order ID in the box below and press the "Track" button.
        This was given to you on your receipt and in the confirmation email you should have received.
      </p>

      <div className="w-full max-w-2xl">
        <div className="mb-6">
          <label htmlFor="orderId" className="block text-base font-medium mb-2">
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            placeholder="Found in your order confirmation email."
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#870134]"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="billingEmail" className="block text-base font-medium mb-2">
            Billing email
          </label>
          <input
            type="email"
            id="billingEmail"
            placeholder="Email you used during checkout."
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#870134]"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="bg-[#870134] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#6c012a] transition duration-200"
          >
            TRACK
          </button>
        </div>
      </div>
    </section>
  );
}
