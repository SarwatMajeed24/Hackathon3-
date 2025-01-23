import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              My SM E-Mart is your go-to destination for all your shopping needs. Explore a wide range of products at the best prices.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="hover:underline">Help Center</Link></li>
              <li><Link href="/shipping" className="hover:underline">Shipping & Delivery</Link></li>
              <li><Link href="/returns" className="hover:underline">Returns & Refunds</Link></li>
              <li><Link href="/faqs" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
              <Link 
              target="_blank" 
              href="https://www.linkedin.com/in/sarwat-majeed" 
              className="text-blue-800"
            >
              <FaLinkedin className='text-2xl sm:text-3xl hover:text-blue-600' />
            </Link>
              </li>
              <li>
              <Link 
              target="_blank" 
              href="https://vercel.com/sarwat-majeeds-projects" 
              className="bg-gray-500"
            >
              <SiVercel className='text-2xl sm:text-3xl hover:text-gray-600' />
            </Link>
              </li>
              <li>
              <Link 
              target="_blank" 
              href="https://github.com/SarwatMajeed24" 
              className="bg-gray-500"
            >
              <FaGithub className='text-2xl sm:text-3xl hover:text-gray-600' />
            </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter to receive the latest updates and offers.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 rounded-r text-white font-semibold hover:bg-indigo-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} My Marketplace. All rights reserved.
          </p>
          <ul className="flex space-x-6 text-sm">
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
