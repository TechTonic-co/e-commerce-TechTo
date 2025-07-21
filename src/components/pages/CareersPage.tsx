import React from 'react';

export default function CareersPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Careers at TechTonic</h1>
      <p className="mb-4">Join our team and help shape the future of AI-powered eCommerce.</p>

      <ul className="list-disc pl-5 space-y-2">
        <li>Frontend Developer (React.js, Tailwind CSS)</li>
        <li>AI Research Engineer</li>
        <li>Marketing and Growth Strategist</li>
      </ul>

      <p className="mt-6">Email your resume to <a href="mailto:careers@techtonic-co.com" className="text-blue-500 underline">careers@techtonic-co.com</a></p>
    </div>
  );
}
