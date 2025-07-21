import React, { useEffect } from 'react';

export default function ReturnsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="p-8 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Returns Policy for Smart Devices</h1>

      <p className="mb-6">
        At <strong>Techtonic-Co</strong>, we want you to be completely satisfied with your purchase. If you are not happy with your smart device, you can return it under the following conditions:
      </p>

      <h2 style={{ color: '#870134' }} className="text-2xl font-semibold mb-3">
        Eligibility for Returns
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Returns must be initiated within <strong>30 days</strong> from the date of delivery.</li>
        <li>The smart device must be returned in its <strong>original condition</strong>, including all accessories, packaging, manuals, and warranty cards.</li>
        <li>The product should be <strong>unused, undamaged, and in resalable condition</strong>.</li>
        <li>Devices showing signs of physical damage, water damage, or unauthorized repairs are <strong>not eligible</strong> for returns.</li>
      </ul>

      <h2 style={{ color: '#870134' }} className="text-2xl font-semibold mb-3">
        Return Process
      </h2>
      <ol className="list-decimal list-inside mb-6 space-y-1">
        <li>
          <strong>Contact Customer Support:</strong> Please reach out to our support team at{' '}
          <a href="mailto:support@techtonic-co.com" className="text-blue-600 underline">
            support@techtonic-co.com
          </a>{' '}
          to request a return authorization.
        </li>
        <li><strong>Return Authorization:</strong> Once approved, you will receive instructions on how to ship the device back to us.</li>
        <li><strong>Packaging:</strong> Ensure the smart device is securely packaged to avoid damage during transit.</li>
        <li><strong>Shipping:</strong> Return shipping costs are the responsibility of the customer unless the device is defective or the return is due to our error.</li>
      </ol>

      <h2 style={{ color: '#870134' }} className="text-2xl font-semibold mb-3">
        Refunds
      </h2>
      <p className="mb-6">
        Once we receive and inspect the returned device, we will process your refund within <strong>7-10 business days</strong>. Refunds will be issued to the original payment method. Shipping fees are <strong>non-refundable</strong> unless the return is due to a defect or error on our part.
      </p>

      <h2 style={{ color: '#870134' }} className="text-2xl font-semibold mb-3">
        Defective or Damaged Items
      </h2>
      <p className="mb-6">
        If you receive a defective or damaged smart device, please contact us within <strong>7 days</strong> of delivery. We will provide a replacement or full refund, including any shipping fees.
      </p>

      <h2 style={{ color: '#870134' }} className="text-2xl font-semibold mb-3">
        Exceptions
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-1">
        <li>Customized or personalized smart devices are <strong>non-returnable</strong> unless faulty.</li>
        <li>Software or digital content bundled with the device is <strong>non-refundable</strong>.</li>
      </ul>
    </section>
  );
}
