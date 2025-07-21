import React, { useEffect } from 'react';

export default function WarrantyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-[#162a42]">Warranty Policy</h1>

      <p className="mb-6">
        Thank you for shopping with us! We stand behind the quality of our products and want you to be completely satisfied with your purchase. Please read our warranty policy below for details on coverage, claims, and support.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-[#870134]">What is Covered?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>All products sold on our website come with a <strong>manufacturer’s warranty</strong> against defects in materials and workmanship.</li>
        <li>Warranty coverage duration varies by product category and is clearly stated on each product page.</li>
        <li>The warranty covers <strong>repair or replacement</strong> of defective items at no additional cost within the warranty period.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-[#870134]">What is Not Covered?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Damage caused by misuse, abuse, accidents, unauthorized modifications, or improper installation.</li>
        <li>Normal wear and tear or cosmetic damage (scratches, dents, fading).</li>
        <li>Consumable parts such as batteries, unless defective upon arrival.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-[#870134]">How to Make a Warranty Claim</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li>Contact our Customer Support team within the warranty period with your order number and detailed description of the issue.</li>
        <li>Provide photos or videos of the defect if requested.</li>
        <li>Our support team will guide you through the warranty claim process, including return shipping instructions if applicable.</li>
        <li>After inspection, we will repair or replace the product or provide an alternative solution.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-3 text-[#870134]">Important Notes</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Please keep your purchase receipt or order confirmation as proof of warranty eligibility.</li>
        <li>Warranty services are only valid for purchases made through our official website or authorized retailers.</li>
        <li>We reserve the right to refuse warranty claims that do not meet the terms outlined above.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-[#162a42]">Need Help?</h2>
      <p>
        If you have questions or need assistance with your product warranty, please contact us at:
      </p>
      <ul className="mt-2 space-y-1">
        <li><strong>Email:</strong> <a href="mailto:support@techtonic-co.com">support@techtonic-co.com</a></li>
        <li><strong>Phone:</strong> +94760213457</li>
      </ul>
      <br/>
    </section>
  );
}
