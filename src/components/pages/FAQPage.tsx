import React from 'react';

export default function FAQPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold text-xl">How can I track my order?</h2>
          <p>You can track your order from your account dashboard under 'Orders'.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl">What is your return policy?</h2>
          <p>Returns are accepted within 14 days of delivery with original packaging.</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl">Do you offer international shipping?</h2>
          <p>Yes, we ship to over 50 countries globally.</p>
        </div>
      </div>
    </div>
  );
}
