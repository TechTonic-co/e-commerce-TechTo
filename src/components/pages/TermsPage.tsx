import React, { useEffect } from 'react';

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-600">Last updated: July 18, 2025</p>

        <p>Please read these terms and conditions carefully before using Our Service.</p>

        <h2 className="text-2xl font-semibold mt-10">Interpretation and Definitions</h2>

        <h3 className="text-xl font-semibold mt-6">Interpretation</h3>
        <p>The words with capitalized initial letters have defined meanings under certain conditions. These apply whether the terms are singular or plural.</p>

        <h3 className="text-xl font-semibold mt-6">Definitions</h3>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Affiliate:</strong> An entity controlling, controlled by, or under common control with a party.</li>
          <li><strong>Country:</strong> Sri Lanka</li>
          <li><strong>Company:</strong> Techtonic-Co, 25 Greenhill Gardens, Kandy 20000, Sri Lanka.</li>
          <li><strong>Device:</strong> Any device like a computer, cellphone, or tablet used to access the Service.</li>
          <li><strong>Service:</strong> Refers to the Website.</li>
          <li>
            <strong>Terms and Conditions:</strong> These terms form the entire agreement.
            (<a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Terms Generator</a>)
          </li>
          <li><strong>Third-party Social Media Service:</strong> Any third-party content provider included in the Service.</li>
          <li><strong>Website:</strong> <a href="https://techtonic-co.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://techtonic-co.com/</a></li>
          <li><strong>You:</strong> The individual or entity using the Service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10">Acknowledgment</h2>
        <p>By accessing or using the Service, You agree to be bound by these Terms. You must be at least 18 years old. Your use of the Service also confirms agreement with our Privacy Policy.</p>

        <h2 className="text-2xl font-semibold mt-10">Links to Other Websites</h2>
        <p>We are not responsible for the content or policies of third-party websites linked through our Service. Please review their policies individually.</p>

        <h2 className="text-2xl font-semibold mt-10">Termination</h2>
        <p>We may terminate or suspend access to our Service immediately, without notice, for any breach of these Terms.</p>

        <h2 className="text-2xl font-semibold mt-10">Limitation of Liability</h2>
        <p>Our liability is limited to the amount you paid through the Service or $100 if no purchases were made.</p>

        <h2 className="text-2xl font-semibold mt-10">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
        <p>The Service is provided “AS IS” without warranty of any kind. We do not guarantee uninterrupted service or that it will meet all expectations.</p>

        <h2 className="text-2xl font-semibold mt-10">Governing Law</h2>
        <p>The laws of Sri Lanka shall govern these Terms and the use of the Service.</p>

        <h2 className="text-2xl font-semibold mt-10">Disputes Resolution</h2>
        <p>If a dispute arises, you agree to attempt informal resolution by contacting the Company first.</p>

        <h2 className="text-2xl font-semibold mt-10">For European Union (EU) Users</h2>
        <p>If you're an EU resident, local consumer protection laws may apply to you.</p>

        <h2 className="text-2xl font-semibold mt-10">United States Legal Compliance</h2>
        <p>You confirm you are not located in a country under U.S. embargo or listed on U.S. prohibited party lists.</p>

        <h2 className="text-2xl font-semibold mt-10">Severability and Waiver</h2>
        <h3 className="text-xl font-semibold mt-6">Severability</h3>
        <p>If any provision is found invalid, the rest remain in full force and effect.</p>

        <h3 className="text-xl font-semibold mt-6">Waiver</h3>
        <p>Failure to enforce a provision does not waive the right to enforce it later.</p>

        <h2 className="text-2xl font-semibold mt-10">Translation Interpretation</h2>
        <p>In case of conflict, the English version of these Terms takes precedence.</p>

        <h2 className="text-2xl font-semibold mt-10">Changes to These Terms and Conditions</h2>
        <p>We may update these Terms at any time. Continued use after changes implies acceptance.</p>

        <h2 className="text-2xl font-semibold mt-10">Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
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
