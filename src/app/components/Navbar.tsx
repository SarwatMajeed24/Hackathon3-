// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { FiShoppingCart } from "react-icons/fi";
// import { useShoppingCart } from "use-shopping-cart";
// import Image from "next/image";

// export default function Navbar() {
//   const { handleCartClick } = useShoppingCart();
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <nav className="bg-black shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           <Image
//             src="/logo.jpg"
//             alt="Logo"
//             width={100}
//             height={100}
//             className="h-[100px] w-[100px] sm:h-16"
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
//           <form className="flex">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700"
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
//             onClick={() => setShowLogin(true)}
//             className="text-yellow-500 font-medium hover:text-orange-600"
//           >
//             Login
//           </button>
//         </div>
//       </div>

//       {/* Login Modal */}
//       {showLogin && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-gray-700">Sign In</h2>
//               <button
//                 onClick={() => setShowLogin(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Login Form */}
//             <form>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email-login"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email-login"
//                   name="email"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="you@example.com"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="password-login"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password-login"
//                   name="password"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="********"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-medium"
//               >
//                 Sign In
//               </button>
//             </form>

//             {/* Sign Up Link */}
//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-600">
//                 Donot have an account?{" "}
//                 <Link href="/signup" className="text-indigo-600 hover:underline">
//                   Sign Up
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    if (selectedCategory) {
      router.push(`/category/${selectedCategory}`); // Navigate to dynamic category page
    }
  };

  return (
    <nav className="bg-black shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="h-[100px] w-[100px] sm:h-24"
          />
          SM E-Mart
        </Link>
        {/* Navigation Links */}
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

        {/* Search and Login */}
        <div className="hidden md:flex items-center space-x-4">
          <form className="flex" onSubmit={handleSearch}>
            {/* Category Dropdown */}
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

          {/* Cart */}
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
          >
            <FiShoppingCart />
          </Button>

          {/* Login Button */}
          <button
            onClick={() => router.push("/signin")} // Navigate to Sign In page
            className="text-yellow-500 font-medium hover:text-orange-600"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
