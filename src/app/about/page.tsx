// "use client";

// import { useRouter } from "next/navigation";

// const About = () => {
//   const router = useRouter();

//   const handleStartShopping = () => {
//     router.push("/products"); // Replace "/products" with the actual route to your product listing page
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header Section */}
//         <div className="bg-orange-500 text-white py-8 px-6 text-center">
//           <h1 className="text-4xl font-bold">About Us</h1>
//           <p className="mt-2 text-lg">
//             Discover quality clothing: Jeans, Shorts, Hoodies, T-Shirts, and Shirts.
//           </p>
//         </div>

//         {/* Content Section */}
//         <div className="p-6 md:p-12">
//           {/* Our Mission */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Mission</h2>
//             <p className="text-gray-600 leading-relaxed">
//               At <span className="font-semibold text-orange-600">[Your Store Name]</span>, we aim to provide
//               stylish, comfortable, and affordable clothing for all. We strive to offer a seamless shopping
//               experience and help our customers express their style effortlessly.
//             </p>
//           </div>

//           {/* What We Offer */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">What We Offer</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {/* Jeans */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">Jeans</h3>
//                 <p className="text-gray-600">
//                   Durable, comfortable, and trendy jeans perfect for all occasions.
//                 </p>
//               </div>

//               {/* Shorts */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">Shorts</h3>
//                 <p className="text-gray-600">
//                   Premium-quality shorts designed for style and comfort.
//                 </p>
//               </div>

//               {/* Hoodies */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">Hoodies</h3>
//                 <p className="text-gray-600">
//                   Cozy and stylish hoodies for every season.
//                 </p>
//               </div>

//               {/* T-Shirts */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">T-Shirts</h3>
//                 <p className="text-gray-600">
//                   A wide variety of t-shirts for every taste and style.
//                 </p>
//               </div>

//               {/* Shirts */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">Shirts</h3>
//                 <p className="text-gray-600">
//                   Premium shirts tailored for casual and formal occasions.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Why Choose Us */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">Why Choose Us?</h2>
//             <ul className="space-y-4 text-gray-600">
//               <li className="flex items-start">
//                 <span className="text-orange-500 mr-3">✔️</span>
//                 High-quality materials for long-lasting wear.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-orange-500 mr-3">✔️</span>
//                 Affordable prices that suit every budget.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-orange-500 mr-3">✔️</span>
//                 Wide variety of trendy and classic styles.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-orange-500 mr-3">✔️</span>
//                 Reliable shipping and excellent customer service.
//               </li>
//             </ul>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h2>
//             <p className="text-gray-600 mb-6">
//               Stay updated with the latest trends and exclusive offers by shopping with us.
//             </p>
//             <button
//               onClick={handleStartShopping}
//               className="py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
// "use client";

// import { useRouter } from "next/navigation";

// const About = () => {
//   const router = useRouter();

//   // Navigate to the Shop Page
//   const handleStartShopping = () => {
//     router.push("/products"); // Adjust the route if your shop page is different
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header Section */}
//         <div className="bg-orange-500 text-white py-8 px-6 text-center">
//           <h1 className="text-4xl font-bold">About Us</h1>
//           <p className="mt-2 text-lg">
//             Discover quality clothing: Jeans, Shorts, Hoodies, T-Shirts, and Shirts.
//           </p>
//         </div>

//         {/* Content Section */}
//         <div className="p-6 md:p-12">
//           {/* Call to Action */}
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h2>
//             <p className="text-gray-600 mb-6">
//               Stay updated with the latest trends and exclusive offers by shopping with us.
//             </p>
//             <button
//               onClick={handleStartShopping}
//               className="py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// "use client";

// const About = () => {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header Section */}
//         <div className="bg-orange-500 text-white py-8 px-6 text-center">
//           <h1 className="text-4xl font-bold">About Us</h1>
//           <p className="mt-2 text-lg">
//             Your trusted destination for premium clothing, offering Jeans, Shorts, Hoodies, T-Shirts, and Shirts.
//           </p>
//         </div>

//         {/* About Content Section */}
//         <div className="p-6 md:p-12">
//           {/* Our Story */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Story</h2>
//             <p className="text-gray-600 leading-relaxed">
//               Established with the vision of redefining everyday fashion, 
//               <span className="font-semibold text-orange-600"> [Your Store Name]</span> has grown to become a trusted name in the clothing industry.
//               We pride ourselves on offering stylish, comfortable, and high-quality apparel that suits every lifestyle.
//             </p>
//           </div>

//           {/* Our Values */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Values</h2>
//             <ul className="list-disc pl-6 text-gray-600 space-y-4">
//               <li>
//                 <strong className="text-orange-600">Quality First:</strong> We ensure that every piece of clothing is crafted with premium materials.
//               </li>
//               <li>
//                 <strong className="text-orange-600">Customer-Centric:</strong> Your satisfaction drives our innovation and service.
//               </li>
//               <li>
//                 <strong className="text-orange-600">Sustainability:</strong> We care for the planet and use eco-friendly practices whenever possible.
//               </li>
//               <li>
//                 <strong className="text-orange-600">Inclusivity:</strong> Our diverse collections are made to cater to all sizes, styles, and preferences.
//               </li>
//             </ul>
//           </div>

//           {/* Product Offerings */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">What We Offer</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {/* Jeans */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">Jeans</h3>
//                 <p className="text-gray-600">
//                   Durable, comfortable, and trendy jeans designed for all occasions.
//                 </p>
//               </div>

//               {/* Shorts */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">Shorts</h3>
//                 <p className="text-gray-600">
//                   Stylish and breathable shorts perfect for casual and active lifestyles.
//                 </p>
//               </div>

//               {/* Hoodies */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">Hoodies</h3>
//                 <p className="text-gray-600">
//                   Stay cozy with our premium hoodies, ideal for every season.
//                 </p>
//               </div>

//               {/* T-Shirts */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">T-Shirts</h3>
//                 <p className="text-gray-600">
//                   A wide range of stylish and comfortable t-shirts for any occasion.
//                 </p>
//               </div>

//               {/* Shirts */}
//               <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold text-orange-600 mb-2">Shirts</h3>
//                 <p className="text-gray-600">
//                   Premium shirts that blend classic designs with modern tailoring.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Why Choose Us */}
//           <div className="mb-12">
//             <h2 className="text-3xl font-bold text-orange-600 mb-4">Why Choose Us?</h2>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               At <span className="font-semibold text-orange-600">[Your Store Name]</span>, we prioritize your needs and ensure:
//             </p>
//             <ul className="space-y-4 text-gray-600">
//               <li className="flex items-start">
//                 <span className="text-orange-600 mr-3">✔️</span>
//                 High-quality, long-lasting materials.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-orange-600 mr-3">✔️</span>
//                 Affordable prices that offer excellent value.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-orange-600 mr-3">✔️</span>
//                 A wide variety of styles to suit all preferences.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-orange-600 mr-3">✔️</span>
//                 A seamless shopping experience with fast shipping.
//               </li>
//               <li className="flex items-start">
//                 <span className="text-orange-600 mr-3">✔️</span>
//                 Dedicated customer support to assist with any inquiries.
//               </li>
//             </ul>
//           </div>

//           {/* Call to Action */}
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Explore?</h2>
//             <p className="text-gray-600 mb-6">
//               Join thousands of happy customers and elevate your wardrobe with our exclusive collection.
//             </p>
//             <button
//               onClick={() => window.location.href = "/products"}
//               className="py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


"use client";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-orange-500 text-white py-8 px-6 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">
            Your trusted destination for premium clothing, offering Jeans, Shorts, Hoodies, T-Shirts, and Shirts.
          </p>
        </div>

        {/* About Content Section */}
        <div className="p-6 md:p-12">
          {/* Our Story */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Established with the vision of redefining everyday fashion, 
              <span className="font-semibold text-orange-600"> SM E-Mart</span> has grown to become a trusted name in the clothing industry.
              We pride ourselves on offering stylish, comfortable, and high-quality apparel that suits every lifestyle.
            </p>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-4">
              <li>
                <strong className="text-orange-600">Quality First:</strong> We ensure that every piece of clothing is crafted with premium materials.
              </li>
              <li>
                <strong className="text-orange-600">Customer-Centric:</strong> Your satisfaction drives our innovation and service.
              </li>
              <li>
                <strong className="text-orange-600">Sustainability:</strong> We care for the planet and use eco-friendly practices whenever possible.
              </li>
              <li>
                <strong className="text-orange-600">Inclusivity:</strong> Our diverse collections are made to cater to all sizes, styles, and preferences.
              </li>
            </ul>
          </div>

          {/* Product Offerings */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Jeans */}
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Jeans</h3>
                <p className="text-gray-600">
                  Durable, comfortable, and trendy jeans designed for all occasions.
                </p>
              </div>

              {/* Shorts */}
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Shorts</h3>
                <p className="text-gray-600">
                  Stylish and breathable shorts perfect for casual and active lifestyles.
                </p>
              </div>

              {/* Hoodies */}
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Hoodies</h3>
                <p className="text-gray-600">
                  Stay cozy with our premium hoodies, ideal for every season.
                </p>
              </div>

              {/* T-Shirts */}
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">T-Shirts</h3>
                <p className="text-gray-600">
                  A wide range of stylish and comfortable t-shirts for any occasion.
                </p>
              </div>

              {/* Shirts */}
              <div className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Shirts</h3>
                <p className="text-gray-600">
                  Premium shirts that blend classic designs with modern tailoring.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At <span className="font-semibold text-orange-600">[Your Store Name]</span>, we prioritize your needs and ensure:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">✔️</span>
                High-quality, long-lasting materials.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">✔️</span>
                Affordable prices that offer excellent value.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">✔️</span>
                A wide variety of styles to suit all preferences.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">✔️</span>
                A seamless shopping experience with fast shipping.
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-3">✔️</span>
                Dedicated customer support to assist with any inquiries.
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Explore?</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of happy customers and elevate your wardrobe with our exclusive collection.
            </p>
            <button
              onClick={() => window.location.href = "/shop"}
              className="py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
