"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export default function Navbar() {
  const { handleCartClick } = useShoppingCart();
  const router = useRouter();
  const [categories] = useState(["hoodie", "shirt", "short", "jeans", "tshirt"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedCategory) {
      router.push(`/category/${selectedCategory}`);
    }
  };

  return (
    <nav className="bg-black shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center text-2xl font-bold text-orange-500">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="h-[50px] w-[50px] sm:h-[100px] sm:w-[100px]"
          />
          <span className="ml-2">SM E-Mart</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-orange-700 font-medium">
          <li>
            <Link href="/" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-yellow-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/faq" className="hover:text-yellow-500">
              FAQs
            </Link>
          </li>
        </ul>

        {/* Search and Login (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <form className="flex" onSubmit={handleSearch}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-l-lg border-gray-300 bg-white focus:outline-none focus:ring focus:ring-indigo-500"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700"
              disabled={!selectedCategory}
            >
              Search
            </button>
          </form>
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
          >
            <FiShoppingCart />
          </Button>
          <button
            onClick={() => router.push("/signin")}
            className="text-yellow-500 font-medium hover:text-orange-600"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black text-orange-700">
          <ul className="flex flex-col space-y-4 px-4 py-2">
            <li>
              <Link href="/" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-yellow-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-yellow-500">
                FAQs
              </Link>
            </li>
          </ul>

          <div className="px-4 py-2 space-y-4">
            <form className="flex flex-col" onSubmit={handleSearch}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg border-gray-300 bg-white focus:outline-none focus:ring focus:ring-indigo-500"
              >
                <option value="" disabled>
                  Select Category
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
                disabled={!selectedCategory}
              >
                Search
              </button>
            </form>
            <Button
              variant={"outline"}
              onClick={() => handleCartClick()}
              className="flex items-center justify-center text-gray-700 hover:text-indigo-600 w-full"
            >
              <FiShoppingCart />
            </Button>
            <button
              onClick={() => router.push("/signin")}
              className="text-yellow-500 font-medium hover:text-orange-600 w-full"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
