"use client";

import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused and undamaged items with original tags and packaging. To initiate a return, contact our support team at support@yourstore.com.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 5-7 business days for standard delivery. Expedited shipping options are also available at checkout.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary based on location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive an email with a tracking number. You can use this number to track your package on our website or the courier's site.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, PayPal, and various digital payment options for a seamless checkout experience.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team by emailing support@yourstore.com or calling +92 300 123 4567. We're available Monday to Friday from 9 AM to 6 PM.",
    },
    {
      question: "Do you offer discounts or promotions?",
      answer:
        "Yes, we frequently run promotions and discounts. Subscribe to our newsletter to stay updated on the latest deals.",
    },
  ];

  const [userQuestion, setUserQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleAskQuestion = () => {
    // Check if the user's question matches any FAQ question
    const matchedFAQ = faqs.find((faq) =>
      faq.question.toLowerCase().includes(userQuestion.toLowerCase())
    );

    if (matchedFAQ) {
      setResponse(matchedFAQ.answer); // Show the matched answer
    } else {
      setResponse(
        "We don’t have an answer for that right now, but we’ll get back to you soon!"
      );
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-orange-500 text-white py-8 px-6 text-center">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-2 text-lg">
            Find answers to common questions or ask your own!
          </p>
        </div>

        {/* Static FAQ Section */}
        <div className="p-6 md:p-12">
          <h2 className="text-3xl font-bold text-orange-600 mb-8">FAQs</h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-8 bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}

          {/* Ask a Question Section */}
          <h2 className="text-3xl font-bold text-orange-600 mt-12 mb-8">
            Ask a Question
          </h2>
          <div>
            <input
              type="text"
              placeholder="Type your question here..."
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleAskQuestion}
              className="mt-4 py-2 px-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
            >
              Ask Question
            </button>
          </div>

          {/* Response Section */}
          {response && (
            <div className="mt-8 bg-yellow-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                Answer:
              </h3>
              <p className="text-gray-600 leading-relaxed">{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
