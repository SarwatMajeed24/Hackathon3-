"use client";
// import React from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <Link href="/">
//           className="text-2xl font-bold text-orange-500"My Marketplace
//         </Link>
//         <ul className="flex space-x-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//           <li><Link href="/brands">Brands</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/overview">Overview</Link></li>
//           <li><Link href="/cart">Cart</Link></li>
//           <li><Link href="/search">Search</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           My Marketplace
//         </Link>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/brands">Brands</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//           <li><Link href="/faq">FAQs</Link></li>
//           <li><Link href="/cart">Cart</Link></li>
//         </ul>

//         {/* Search Bar and Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Search */}
//           <form className="hidden md:flex">
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

//           {/* User Account */}
//           <Link href="/account" className="text-gray-700 hover:text-indigo-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5.121 18.364A9 9 0 1118.364 5.121M12 12h.01M12 12v.01"
//               />
//             </svg>
//           </Link>

//           {/* Cart */}
//           <Link href="/cart" className="text-gray-700 hover:text-indigo-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l1.6 2.4M17 13l-1.6 2.4M9 19a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
//               />
//             </svg>
//           </Link>
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           aria-label="Toggle Navigation"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div className="md:hidden">
//         <ul className="flex flex-col space-y-2 mt-4 px-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/about">About</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/brands">Brands</Link></li>
//           <li><Link href="/contact">Contact</Link></li>
//           <li><Link href="/faq">FAQs</Link></li>
//           <li><Link href="/cart">Cart</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           My Marketplace
//         </Link>

//         {/* Navigation Links */}
//         <ul className="flex space-x-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/deals">Deals</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//           <li><Link href="/contact">Contact Us</Link></li>
//           <li><Link href="/faq">FAQs</Link></li>
//           <li><Link href="/account">My Account</Link></li>
//           <li><Link href="/cart">Cart</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// import React from 'react';
// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           My Marketplace
//         </Link>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/deals">Deals</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//           <li><Link href="/contact">Contact Us</Link></li>
//           <li><Link href="/faq">FAQs</Link></li>
//         </ul>

//         {/* Search Bar */}
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

//           {/* Cart and Account Links */}
//           <div className="flex space-x-4">
//             {/* Cart */}
//             <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
//               <span>Cart</span>
//             </Link>

//             {/* Account */}
//             <Link href="/account" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
//               <span>Account</span>
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Navigation Toggle */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           aria-label="Toggle Navigation"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div className="md:hidden">
//         <ul className="flex flex-col space-y-2 mt-4 px-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/deals">Deals</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//           <li><Link href="/contact">Contact Us</Link></li>
//           <li><Link href="/faq">FAQs</Link></li>
//           <li><Link href="/cart">Cart</Link></li>
//           <li><Link href="/account">Account</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }




// "use client"

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FiShoppingCart } from "react-icons/fi";

// export default function Navbar() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <nav className="bg-white shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//           My Marketplace
//         </Link>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/deals">Deals</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//           <li><Link href="/contact">Contact Us</Link></li>
//           <li><Link href="/faq">FAQs</Link></li>
//         </ul>

//         {/* Search Bar */}
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

//           {/* Cart and Login Links */}
//           <div className="flex space-x-4 items-center">
//             {/* Cart */}
//             <Link href="/cart" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"><FiShoppingCart />
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l1.6 2.4m8.8-2.4l1.6 2.4M9 19a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
//                 />
//               </svg> */}
              
//             </Link>

//             {/* Login */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowLogin(!showLogin)}
//                 className="text-gray-700 font-medium hover:text-indigo-600"
//               >
//                 Login
//               </button>
//               {showLogin && (
//                 <div className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-4 w-64 z-10">
//                   <form>
//                     <div className="mb-4">
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         placeholder="********"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-medium"
//                     >
//                       Login
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div className="md:hidden">
//         <ul className="flex flex-col space-y-2 mt-4 px-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/deals">Deals</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//           <li><Link href="/contact">Contact Us</Link></li>
//           <li><Link href="/faq">FAQs</Link></li>
//           <li><Link href="/cart">Cart</Link></li>
//           <li><button onClick={() => setShowLogin(!showLogin)}>Login</button></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { FiShoppingCart } from "react-icons/fi";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// // import { ShoppingBag } from "lucide-react";
// import { useShoppingCart } from "use-shopping-cart";

// export default function Navbar() {
//   const pathname = usePathname();
//   const { handleCartClick } = useShoppingCart();
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignUp, setShowSignUP] = useState(false);

//   return (
//     <nav className="bg-black shadow-md py-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold text-orange-500">
//         <Image
//             src="/logo.jpg" 
//             alt="Logo" 
//             width={100}
//             height={100}
//             className="h-[100px] w-[100px] sm:h-16" 
//           />
//           SM Mart
//         </Link>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-6 text-orange-700 font-medium">
//           <li><Link href="/" className=" hover:text-yellow-500">Home</Link></li>
//           <li><Link href="/shop" className=" hover:text-yellow-500" >Shop</Link></li>
//           <li><Link href="/about" className=" hover:text-yellow-500">About Us</Link></li>
//           <li><Link href="/contact" className=" hover:text-yellow-500">Contact Us</Link></li>
//           <li><Link href="/faq" className=" hover:text-yellow-500">FAQs</Link></li>
//         </ul>

//         {/* Search Bar */}
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

//           {/* Cart and Login Links */}
//           <div className="flex space-x-4 items-center">
//             {/* Cart
//             <Link
//               href="/cart"
//               className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
//             >
            
//               <FiShoppingCart className="h-6 w-6" />
            
//             </Link> */}

//               <Button
//             variant={"outline"}
//             onClick={() => handleCartClick()}
//              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
//           >
//             <FiShoppingCart />
            
//           </Button>

//             {/* Login */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowLogin(!showLogin)}
//                 className="text-yellow-500 font-medium hover:text-orange-600"
//               >
//                 Login
//               </button>
//               <div className="relative">
//               <button
//                 onClick={() => setShowSignUp(!showSignUp)}
//                 className="text-yellow-500 font-medium hover:text-orange-600"
//               >
//                 Sign Up
//               </button>
//               {showLogin && (
//                 <div className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-4 w-64 z-10">
//                   <form>
//                     <div className="mb-4">
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         placeholder="********"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-medium"
//                     >
//                       Login
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div className="md:hidden">
//         <ul className="flex flex-col space-y-2 mt-4 px-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/deals">Deals</Link></li>
//           <li><Link href="/about">About Us</Link></li>
//           <li><Link href="/contact">Contact Us</Link></li>
//           <li><Link href="/faq">FAQs</Link></li>
//           <li><Link href="/cart">Cart</Link></li>
//           <li><button onClick={() => setShowLogin(!showLogin)}>Login</button></li>
//           <li><button onClick={() => setShowSignUp(!showSignUp)}>Login</button></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }
{/* // "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { FiShoppingCart } from "react-icons/fi";
// import { useShoppingCart } from "use-shopping-cart";

// export default function Navbar() {
  const { handleCartClick } = useShoppingCart();

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          My Marketplace
        </Link>

        {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/shop">Shop</Link></li>
//           <li><Link href="/categories">Categories</Link></li>
//           <li><Link href="/deals">Deals</Link></li>
//         </ul>

//         {/* Cart */}
//         <div className="flex items-center space-x-4">
//           <Link
//             href="/cart"
//             onClick={handleCartClick}
//             className="text-gray-700 hover:text-indigo-600"
//           >
//             <FiShoppingCart className="h-6 w-6" />
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// } */}




// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { FiShoppingCart } from "react-icons/fi";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { useShoppingCart } from "use-shopping-cart";

// export default function Navbar() {
//   const pathname = usePathname();
//   const { handleCartClick } = useShoppingCart();
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignUp, setShowSignUp] = useState(false);

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
//           SM Mart
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

//         {/* Search Bar */}
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

//           {/* Cart and Auth Links */}
//           <div className="flex space-x-4 items-center">
//             <Button
//               variant={"outline"}
//               onClick={() => handleCartClick()}
//               className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
//             >
//               <FiShoppingCart />
//             </Button>

//             {/* Login */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowLogin(!showLogin)}
//                 className="text-yellow-500 font-medium hover:text-orange-600"
//               >
//                 Login
//               </button>
//               {showLogin && (
//                 <div className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-4 w-64 z-10">
//                   <form>
//                     <div className="mb-4">
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         htmlFor="password"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         placeholder="********"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-medium"
//                     >
//                       Login
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>

//             {/* Sign Up */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowSignUp(!showSignUp)}
//                 className="text-yellow-500 font-medium hover:text-orange-600"
//               >
//                 Sign Up
//               </button>
//               {showSignUp && (
//                 <div className="absolute right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg p-4 w-64 z-10">
//                   <form>
//                     <div className="mb-4">
//                       <label
//                         htmlFor="email-signup"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         id="email-signup"
//                         name="email-signup"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         placeholder="you@example.com"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label
//                         htmlFor="password-signup"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         id="password-signup"
//                         name="password-signup"
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         placeholder="********"
//                       />
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-medium"
//                     >
//                       Sign Up
//                     </button>
//                   </form>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div className="md:hidden">
//         <ul className="flex flex-col space-y-2 mt-4 px-6 text-gray-700 font-medium">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/shop">Shop</Link>
//           </li>
//           <li>
//             <Link href="/about">About Us</Link>
//           </li>
//           <li>
//             <Link href="/contact">Contact Us</Link>
//           </li>
//           <li>
//             <Link href="/faq">FAQs</Link>
//           </li>
//           <li>
//             <button onClick={() => setShowLogin(!showLogin)}>Login</button>
//           </li>
//           <li>
//             <button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React, { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { FiShoppingCart } from "react-icons/fi";
// import { useShoppingCart } from "use-shopping-cart";
// import Image from "next/image";

// export default function Navbar() {
//   const { handleCartClick } = useShoppingCart();
//   const [showModal, setShowModal] = useState(false);
//   const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

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
//           SM Mart
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

//         {/* Search Bar and Login */}
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
//             onClick={() => setShowModal(true)}
//             className="text-yellow-500 font-medium hover:text-orange-600"
//           >
//             Login
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-gray-700">
//                 {activeTab === "signin" ? "Sign In" : "Sign Up"}
//               </h2>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Tabs */}
//             <div className="flex justify-center mb-6">
//               <button
//                 onClick={() => setActiveTab("signin")}
//                 className={`w-1/2 py-2 ${
//                   activeTab === "signin"
//                     ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
//                     : "text-gray-500 hover:text-indigo-600"
//                 }`}
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => setActiveTab("signup")}
//                 className={`w-1/2 py-2 ${
//                   activeTab === "signup"
//                     ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
//                     : "text-gray-500 hover:text-indigo-600"
//                 }`}
//               >
//                 Sign Up
//               </button>
//             </div>

//             {/* Sign In Form */}
//             {activeTab === "signin" && (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email-signin"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email-signin"
//                     name="email"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="you@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password-signin"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password-signin"
//                     name="password"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="********"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-medium"
//                 >
//                   Sign In
//                 </button>
//               </form>
//             )}

//             {/* Sign Up Form */}
//             {activeTab === "signup" && (
//               <form>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email-signup"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email-signup"
//                     name="email"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="you@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="password-signup"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password-signup"
//                     name="password"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="********"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="confirm-password-signup"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password"
//                     id="confirm-password-signup"
//                     name="confirmPassword"
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="********"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-medium"
//                 >
//                   Sign Up
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

export default function Navbar() {
  const { handleCartClick } = useShoppingCart();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <nav className="bg-black shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={100}
            height={100}
            className="h-[100px] w-[100px] sm:h-16"
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
          <form className="flex">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-r-lg hover:bg-indigo-700"
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
            onClick={() => setShowLogin(true)}
            className="text-yellow-500 font-medium hover:text-orange-600"
          >
            Login
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-700">Sign In</h2>
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {/* Login Form */}
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email-login"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email-login"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password-login"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password-login"
                  name="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="********"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 font-medium"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Donot have an account?{" "}
                <Link href="/signup" className="text-indigo-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
