// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { FiShoppingCart } from "react-icons/fi";
// import { useShoppingCart } from "use-shopping-cart";
// import Image from "next/image";

// export default function Navbar() {
//   const { handleCartClick } = useShoppingCart();
//   const router = useRouter();
//   const [categories] = useState(["hoodie", "shirt", "short", "jeans", "tshirt"]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // Prevent form submission from reloading the page
//     if (selectedCategory) {
//       router.push(`/category/${selectedCategory}`); // Navigate to dynamic category page
//     }
//   };

//   return (
//     <nav className="bg-black shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           <Image
//             src="/logo.jpg"
//             alt="Logo"
//             width={50}
//             height={50}
//             className="h-[100px] w-[100px] sm:h-24"
//           />
//           SM E-Mart
//         </Link>
//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-6 text-orange-700 font-medium">
//           <li>
//             <Link href="/" className="hover:text-yellow-500">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/shop" className="hover:text-yellow-500">
//               Shop
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:text-yellow-500">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-yellow-500">
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/faq" className="hover:text-yellow-500">
//               FAQs
//             </Link>
//           </li>
//         </ul>

//         {/* Search and Login */}
//         <div className="hidden md:flex items-center space-x-4">
//           <form className="flex" onSubmit={handleSearch}>
//             {/* Category Dropdown */}
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="px-4 py-2 border rounded-l-lg border-gray-300 bg-white focus:outline-none focus:ring focus:ring-indigo-500"
//             >
//               <option value="" disabled>
//                 Select Category
//               </option>
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </option>
//               ))}
//             </select>

//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700"
//               disabled={!selectedCategory}
//             >
//               Search
//             </button>
//           </form>

//           {/* Cart */}
//           <Button
//             variant={"outline"}
//             onClick={() => handleCartClick()}
//             className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
//           >
//             <FiShoppingCart />
//           </Button>

//           {/* Login Button */}
//           <button
//             onClick={() => router.push("/signin")} // Navigate to Sign In page
//             className="text-yellow-500 font-medium hover:text-orange-600"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
// import { useShoppingCart } from "use-shopping-cart";
// import Image from "next/image";

// export default function Navbar() {
//   const { handleCartClick } = useShoppingCart();
//   const router = useRouter();
//   const [categories] = useState(["hoodie", "shirt", "short", "jeans", "tshirt"]);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (selectedCategory) {
//       router.push(`/category/${selectedCategory}`);
//     }
//   };

//   return (
//     <nav className="bg-black shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-500 flex items-center space-x-2">
//           <Image
//             src="/logo.jpg"
//             alt="Logo"
//             width={50}
//             height={50}
//             className="h-10 w-10"
//           />
//           <span>SM E-Mart</span>
//         </Link>

//         {/* Hamburger Menu Button for Small Screens */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-orange-500 focus:outline-none"
//           >
//             {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Navigation Links (Large Screens) */}
//         <ul className="hidden md:flex space-x-6 text-orange-700 font-medium">
//           <li>
//             <Link href="/" className="hover:text-yellow-500">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/shop" className="hover:text-yellow-500">
//               Shop
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="hover:text-yellow-500">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-yellow-500">
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/faq" className="hover:text-yellow-500">
//               FAQs
//             </Link>
//           </li>
//         </ul>

//         {/* Search and Cart (Large Screens) */}
//         <div className="hidden md:flex items-center space-x-4">
//           <form className="flex" onSubmit={handleSearch}>
//             <select
//               value={selectedCategory}
//               onChange={(e) => setSelectedCategory(e.target.value)}
//               className="px-4 py-2 border rounded-l-lg border-gray-300 bg-white focus:outline-none focus:ring focus:ring-indigo-500"
//             >
//               <option value="" disabled>
//                 Select Category
//               </option>
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </option>
//               ))}
//             </select>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700"
//               disabled={!selectedCategory}
//             >
//               Search
//             </button>
//           </form>
//           <Button
//             variant={"outline"}
//             onClick={() => handleCartClick()}
//             className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
//           >
//             <FiShoppingCart />
//           </Button>
//           <button
//             onClick={() => router.push("/signin")}
//             className="text-yellow-500 font-medium hover:text-orange-600"
//           >
//             Login
//           </button>
//         </div>
//       </div>

//       {/* Responsive Navigation Links (Small Screens) */}
//       {isMenuOpen && (
//         <ul className="md:hidden bg-black text-orange-700 font-medium space-y-4 p-6">
//           <li>
//             <Link href="/" className="block hover:text-yellow-500">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/shop" className="block hover:text-yellow-500">
//               Shop
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="block hover:text-yellow-500">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="block hover:text-yellow-500">
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link href="/faq" className="block hover:text-yellow-500">
//               FAQs
//             </Link>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export default function Navbar() {
  const { handleCartClick } = useShoppingCart();
  const router = useRouter();
  const [categories] = useState(["hoodie", "shirt", "short", "jeans", "tshirt"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link href="/" className="text-2xl font-bold text-orange-500 flex items-center space-x-2">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="md:h-[100px] md:w-[100px] sm:h-10 sm:w-10"
          />
          <span>SM E-Mart</span>
        </Link>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-orange-500 focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links (Large Screens) */}
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

        {/* Search and Cart (Large Screens) */}
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

      {/* Responsive Navigation Menu (Small Screens) */}
      {isMenuOpen && (
        <ul className="md:hidden bg-black text-orange-700 font-medium space-y-4 p-6">
          <li>
            <Link href="/" className="block hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="block hover:text-yellow-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="block hover:text-yellow-500">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:text-yellow-500">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/faq" className="block hover:text-yellow-500">
              FAQs
            </Link>
          </li>
          {/* Search */}
          <li>
            <form className="flex" onSubmit={handleSearch}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-l-lg border-gray-300 bg-white focus:outline-none focus:ring focus:ring-indigo-500"
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
          </li>
          {/* Cart */}
          <li>
            <Button
              variant={"outline"}
              onClick={() => handleCartClick()}
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
            >
              <FiShoppingCart />
            </Button>
          </li>
          {/* Login */}
          <li>
            <button
              onClick={() => router.push("/signin")}
              className="text-yellow-500 font-medium hover:text-orange-600"
            >
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
