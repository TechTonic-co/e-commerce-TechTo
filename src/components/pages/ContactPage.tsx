import React, { useState, useEffect } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    setIsSubmitting(true);

    const response = await fetch('https://formspree.io/f/mgvzvgne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        'g-recaptcha-response': captchaToken,
      }),
    });

    const result = await response.json();
    setIsSubmitting(false);

    if (result.ok || response.status === 200) {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setCaptchaToken(null);
    } else {
      alert('There was a problem submitting your message. Please try again later.');
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: "Send us an email and we'll respond within 24 hours",
      contact: 'support@techtonic-co.com',
      action: 'mailto:support@techtonic-co.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our support team',
      contact: '+94760213457',
      action: 'tel:+94760213457',
    },
  ];

  const faqs = [
    {
      question: 'How does AI-powered recommendation work?',
      answer:
        'Our AI analyzes your browsing history, purchase patterns, and preferences to suggest products that match your interests and needs.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return policy for all products. Items must be in original condition with all packaging and accessories.',
    },
    {
      question: 'Which countries do you ship to?',
      answer:
        'We ship to more than 50 countries around the globe. Shipping fees and delivery times vary by location, but we always provide fair pricing.',
    },
    {
      question: 'How secure is my payment information?',
      answer:
        'We use industry-standard SSL encryption and work with trusted payment processors to ensure your information is always secure.',
    },
  ];

  const SITE_KEY = '6LdTbogrAAAAANwN8HO6k3RioyZQdxg88hi6Vvn1';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#162a42]/5 to-[#870134]/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#162a42] mb-6">We’re Ready to Assist</h1>
          <p className="text-xl text-[#9b8879] max-w-3xl mx-auto">
            Have questions about our e-commerce platform? We're here to help! Contact our team, and we’ll respond promptly to pick the best.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#162a42] mb-6">Contact Methods</h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#162a42] to-[#870134] text-white backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-white">
                        <method.icon className="w-6 h-6 text-[#870134]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2 text-white">{method.title}</h3>
                        <p className="text-sm mb-3 text-[#f3dede]">{method.description}</p>
                        <a
                          href={method.action}
                          className="font-medium text-white hover:text-[#f3dede] transition-colors"
                        >
                          {method.contact}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/60 backdrop-blur-sm border border-[#870134] rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-[#162a42] mb-6 border-b-2 border-[#870134] pb-2">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#162a42] mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 border border-[#d4cfcf] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#162a42] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 border border-[#d4cfcf] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#162a42] mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 border border-[#d4cfcf] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134]"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#162a42] mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/70 border border-[#d4cfcf] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#870134]/50 focus:border-[#870134] resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} className="mt-2" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#162a42] to-[#870134] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#162a42] text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-[#870134] mb-3">{faq.question}</h3>
                <p className="text-[#162a42] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Google Map Section */}
        <div className="bg-[#162a42] rounded-2xl p-4">
          <div className="rounded-xl overflow-hidden w-full h-96">
            <iframe
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.42984403517!2d80.62578144999999!3d7.2945453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1752917760383!5m2!1sen!2slk"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
