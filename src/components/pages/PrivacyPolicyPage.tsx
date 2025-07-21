import React, { useEffect } from 'react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <style>{`
        h1 {
          color: #162a42;
        }
        h2 {
          color: #870134;
        }
        .custom-shadow {
          box-shadow: 0 4px 12px rgba(22, 42, 66, 0.25);
        }
      `}</style>

      <div className="border border-gray-300 rounded-2xl p-8 space-y-6 text-left bg-white custom-shadow">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600">Last updated: July 18, 2025</p>

        <p>
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your
          information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>

        <p>
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection
          and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the{' '}
          <a
            href="https://www.termsfeed.com/privacy-policy-generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Privacy Policy Generator
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mt-10">Interpretation and Definitions</h2>

        <h3 className="text-xl font-semibold mt-6">Interpretation</h3>
        <p>
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following
          definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-xl font-semibold mt-6">Definitions</h3>
        <p>For the purposes of this Privacy Policy:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Account:</strong> a unique account created for You to access our Service or parts of our Service.</li>
          <li><strong>Affiliate:</strong> an entity that controls, is controlled by or is under common control with a party...</li>
          <li><strong>Company:</strong> refers to Techtonic-Co, 25 Greenhill Gardens, Kandy 20000, Sri Lanka.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Collecting and Using Your Personal Data</h2>
        <h3 className="text-xl font-semibold mt-6">Types of Data Collected</h3>
        <h4 className="text-lg font-medium mt-4">Personal Data</h4>
        <p>We may ask You to provide Us with certain personally identifiable information...</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Usage Data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Children's Privacy</h2>
        <p>Our Service does not address anyone under the age of 13...</p>

        <h2 className="text-2xl font-semibold mt-10">Links to Other Websites</h2>
        <p>Our Service may contain links to other websites that are not operated by Us...</p>

        <h2 className="text-2xl font-semibold mt-10">Changes to this Privacy Policy</h2>
        <p>We may update Our Privacy Policy from time to time...</p>

        <h2 className="text-2xl font-semibold mt-10">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email: <a href="mailto:support@techtonic-co.com" className="text-blue-600 underline">support@techtonic-co.com</a></li>
          <li>Website: <a href="https://techtonic-co.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://techtonic-co.com/</a></li>
          <li>Phone: +94760213457</li>
          <li>Mail: 25 Greenhill Gardens, Kandy 20000, Sri Lanka.</li>
        </ul>
      </div>
    </section>
  );
}
