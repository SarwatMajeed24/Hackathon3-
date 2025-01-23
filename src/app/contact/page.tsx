"use client";

import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-orange-500 text-white py-8 px-6 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">
            We would love to hear from you! Reach out to us with any questions or feedback.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Send us a message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write your message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                Feel free to reach out to us directly using the following contact details:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3">📍</span>
                  123 E-Commerce Street, Karachi, Pakistan
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3">📧</span>
                  support@yourstore.com
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-3">📞</span>
                  +92 300 123 4567
                </li>
              </ul>

              {/* Map */}
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-orange-600 mb-4">Our Location</h2>
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.4843036840235!2d67.03603581500324!3d24.860734984051615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f979dfbd12f%3A0x6aef3bcb2a4e994!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692051174256!5m2!1sen!2s"
                  className="w-full h-64 border rounded-lg"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
