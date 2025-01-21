
// export default ProductDetail;
// import React from 'react';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';

// // Fetch product data based on the dynamic ID
// export async function getServerSideProps({ params }: { params: { id: string } }) {
//   const product = await client.fetch(`
//     *[_type == "products" && _id == "${params.id}"][0]{
//       name,
//       description,
//       price,
//       discountPercentage,
//       category,
//       colors,
//       sizes,
//       "imageUrl": image.asset->url
//     }
//   `);

//   // If no product is found, return a 404 page
//   if (!product) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { product }, // Pass the product data to the page
//   };
// }

// const ProductDetail = ({ product }: { product: any }) => {
//   return (
//     <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Product Image */}
//           <div className="w-full md:w-1/2">
//             <Image
//               src={urlFor(product.imageUrl).url()}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="rounded-lg object-contain"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="w-full md:w-1/2">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 mb-4">{product.description}</p>

//             {/* Price */}
//             <p className="text-2xl font-semibold text-indigo-600 mb-4">
//               ${product.price.toFixed(2)}
//             </p>

//             {/* Discount */}
//             {product.discountPercentage && (
//               <p className="text-red-500 font-medium mb-4">
//                 Save {product.discountPercentage}%!
//               </p>
//             )}

//             {/* Additional Details */}
//             <div className="mb-4">
//               <p className="text-gray-700">
//                 <span className="font-semibold">Category:</span> {product.category}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Colors:</span>{' '}
//                 {product.colors?.join(', ') || 'N/A'}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Sizes:</span>{' '}
//                 {product.sizes?.join(', ') || 'N/A'}
//               </p>
//             </div>

//             {/* Buy Now Button */}
//             <button className="py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetail;

// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';
// import { notFound } from 'next/navigation'; // For handling 404
// import { Button } from "@/components/ui/button";
// import { Star, Truck } from "lucide-react";
// import AddToBag from "@/app/components/AddToBag";
// import CheckoutNow from "@/app/components/CheckoutNow";

// export default async function ProductDetail({ params }: { params: { id: string } }) {
//   // Fetch the product data
//   const product = await client.fetch(`
//     *[_type == "products" && _id == $id][0]{
//       name,
//       description,
//       price,
//       discountPercentage,
//       category,
//       colors,
//       sizes,
//       "imageUrl": image.asset->url
//     }
//   `, { id: params.id });

//   // If no product is found, show a 404 page
//   if (!product) {
//     notFound();
//   }

//   return (
//     <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Product Image */}
//           <div className="w-full md:w-1/2">
//             <Image
//               src={urlFor(product.imageUrl).url()}
//               // src={urlFor(image).url()}
//               alt={product.name}
//               width={500}
//               height={500}
//               className="rounded-lg object-contain"
//             />
//           </div>

//           {/* Product Details */}
//           <div className="w-full md:w-1/2">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 mb-4">{product.description}</p>

//             {/* Price */}
//             <p className="text-2xl font-semibold text-indigo-600 mb-4">
//               ${product.price.toFixed(2)}
//             </p>

//             {/* Discount */}
//             {product.discountPercentage && (
//               <p className="text-red-500 font-medium mb-4">
//                 Save {product.discountPercentage}%!
//               </p>
//             )}

//             {/* Additional Details */}
//             <div className="mb-4">
//               <p className="text-gray-700">
//                 <span className="font-semibold">Category:</span> {product.category}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Colors:</span>{' '}
//                 {product.colors?.join(', ') || 'N/A'}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Sizes:</span>{' '}
//                 {product.sizes?.join(', ') || 'N/A'}
//               </p>
//             </div>
// ?
//           </div>
//           {/* <div className="mb-6 flex items-center gap-3 md:mb-10"> */}
//               <Button className="py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colorsrounded-full gap-x-2">
//                 <span className="text-sm">4.2</span>
//                 <Star className="h-5 w-5" />
//               </Button>

//               <span className="text-sm text-black transition duration-100">
//                 56 Ratings
//               </span>
//             {/* </div> */}

           
//           {/* <div className="flex gap-2.5">
//               <AddToBag
//                 currency="USD"
//                 description={product.description}
//                 image={product.image[0]}
//                 name={product.name}
//                 price={product.price}
//                 key={product._id}
//                 price_id={product.price_id}
//               />
//               <CheckoutNow
//                 currency="USD"
//                 description={product.description}
//                 image={product.image[0]}
//                 name={product.name}
//                 price={product.price}
//                 key={product._id}
//                 price_id={product.price_id}
//               />
//             </div> */} 
//         </div>
//       </div>
//     </section>
//   );
// }

// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { notFound } from "next/navigation"; // For handling 404
// import { Button } from "@/components/ui/button";
// import { Star, Truck } from "lucide-react";
// import AddToBag from "@/app/components/AddToBag";
// import CheckoutNow from "@/app/components/CheckoutNow";

// export default async function ProductDetail({ params }: { params: { id: string } }) {
//   // Fetch the product data
//   const product = await client.fetch(
//     `
//     *[_type == "products" && _id == $id][0]{
//       name,
//       description,
//       price,
//       discountPercentage,
//       category,
//       colors,
//       sizes,
//       "imageUrls": image[]->asset->url
//     }
//   `,
//     { id: params.id }
//   );

//   // If no product is found, show a 404 page
//   if (!product) {
//     notFound();
//   }

//   return (
//     <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Product Image */}
//           <div className="w-full md:w-1/2">
//             {product.imageUrls?.length > 0 ? (
//               <Image
//                 src={urlFor(product.imageUrl).url()}
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="rounded-lg object-contain"
//               />
//             ) : (
//               <Image
//                 src="/placeholder-image.png" // Fallback placeholder image
//                 alt="Placeholder"
//                 width={500}
//                 height={500}
//                 className="rounded-lg object-contain"
//               />
//             )}
//           </div>

//           {/* Product Details */}
//           <div className="w-full md:w-1/2">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
//             <p className="text-lg text-gray-600 mb-4">{product.description}</p>

//             {/* Price */}
//             <p className="text-2xl font-semibold text-indigo-600 mb-4">
//               ${product.price.toFixed(2)}
//             </p>

//             {/* Discount */}
//             {product.discountPercentage && (
//               <p className="text-red-500 font-medium mb-4">
//                 Save {product.discountPercentage}%!
//               </p>
//             )}

//             {/* Additional Details */}
//             <div className="mb-4">
//               <p className="text-gray-700">
//                 <span className="font-semibold">Category:</span> {product.category}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Colors:</span> {product.colors?.join(", ") || "N/A"}
//               </p>
//               <p className="text-gray-700">
//                 <span className="font-semibold">Sizes:</span> {product.sizes?.join(", ") || "N/A"}
//               </p>
//             </div>

//             {/* Buy Now Button */}
//             <button className="py-2 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors">
//               Add To Cart
//             </button>
//           </div>
//         </div>

//         {/* Product Rating */}
//         <div className="mb-6 flex items-center gap-3 md:mb-10">
//           <Button className="rounded-full gap-x-2">
//             <span className="text-sm">4.2</span>
//             <Star className="h-5 w-5" />
//           </Button>
//           <span className="text-sm text-black transition duration-100">56 Ratings</span>
//         </div>

//         {/* Price and Shipping */}
//         <div className="mb-4">
//           <div className="flex items-end gap-2">
//             <span className="text-xl font-bold text-black md:text-2xl">${product.price}</span>
//             <span className="mb-0.5 text-red-500 line-through">${product.price + 30}</span>
//           </div>
//           <span className="text-sm text-black">Incl. Vat plus shipping</span>
//         </div>

//         <div className="mb-6 flex items-center gap-2 text-black">
//           <Truck className="w-6 h-6" />
//           <span className="text-sm">2-4 Day Shipping</span>
//         </div>

//         {/* Add to Bag and Checkout Buttons */}
//         {/* <div className="flex gap-2.5">
//           <AddToBag
//             currency="USD"
//             description={product.description}
//             image={product.imageUrls?.[0] || "/placeholder-image.png"}
//             name={product.name}
//             price={product.price}
//             key={params.id}
//            price_id={params.id}
//           />
//           <CheckoutNow
//             currency="USD"
//             description={product.description}
//             image={product.imageUrls?.[0] || "/placeholder-image.png"}
//             name={product.name}
//             price={product.price}
//             key={params.id}
//            price_id={params.id}
//           />
//         </div> */}
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { notFound } from "next/navigation"; // For handling 404
// import { Button } from "@/components/ui/button";

// export default async function ProductDetail({ params }: { params: { id: string } }) {
//   // Fetch the product data
//   const product = await client.fetch(
//     `
//     *[_type == "products" && _id == $id][0]{
//       name,
//       description,
//       price,
//       discountPercentage,
//       sizes,
//       "imageUrl": image.asset->url
//     }
//   `,
//     { id: params.id }
//   );

//   // If no product is found, show a 404 page
//   if (!product) {
//     notFound();
//   }

//   return (
//     <section className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         {/* Product Image */}
//         <div className="w-full mb-6">
//           <Image
//             src={urlFor(product.imageUrl).url()}
//             alt={product.name}
//             width={600}
//             height={600}
//             className="rounded-lg object-contain"
//           />
//         </div>

//         {/* Product Name */}
//         <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{product.name}</h1>

//         {/* Product Description */}
//         <p className="text-lg text-gray-600 mb-6 text-center">{product.description}</p>

//         {/* Sizes Section */}
//         {product.sizes && product.sizes.length > 0 && (
//           <div className="mb-6 text-center">
//             <h2 className="text-lg font-bold text-gray-800 mb-2">Available Sizes:</h2>
//             <div className="flex justify-center gap-2">
//               {product.sizes.map((size: string, index: number) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Price */}
//         <p className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
//           ${product.price.toFixed(2)}
//         </p>

//         {/* Add to Cart Button */}
//         <div className="flex justify-center">
//           <Button
//             onClick={() => console.log("Add to Cart clicked for", product.name)}
//             className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
//           >
//             Add to Cart
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { notFound } from "next/navigation"; // For handling 404
// import { Button } from "@/components/ui/button";
// import AddToBag from "@/app/components/AddToBag";
// import CheckoutNow from "@/app/components/CheckoutNow";

// export default async function ProductDetail({ params }: { params: { id: string } }) {
//   // Fetch the product data
//   const product = await client.fetch(
   
//     `*[_type == "products" && _id == $id][0]{
//       name,
//       description,
//       price,
//       discountPercentage,
//       sizes,
//       color,
//       "imageUrl": image.asset->url
//     }`,
//     { id: params.id }
//   );

//   // If no product is found, show a 404 page
//   if (!product) {
//     notFound();
//   }

//   return (
//     <section className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         {/* Product Image */}
//         <div className="w-full mb-6">
//           <Image
//             src={urlFor(product.imageUrl).url()}
//             alt={product.name}
//             width={600}
//             height={600}
//             className="rounded-lg object-contain"
//           />
//         </div>

//         {/* Product Name */}
//         <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{product.name}</h1>

//         {/* Product Description */}
//         <p className="text-lg text-gray-600 mb-6 text-center">{product.description}</p>

//         {/* Sizes Section */}
//         {product.sizes && product.sizes.length > 0 && (
//           <div className="mb-6 text-center">
//             <h2 className="text-lg font-bold text-gray-800 mb-2">Available Sizes:</h2>
//             <div className="flex justify-center gap-2">
//               {product.sizes.map((size: string, index: number) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Price */}
//         <p className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
//           ${product.price.toFixed(2)}
//         </p>

//         {/* Add to Cart Button */}
//         <div className="flex justify-center">
//           {/* <Button
//             onClick={() => console.log("Add to Cart clicked for", product.name)}
//             className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md"
//           >
//             Add to Cart
//           </Button>
//         </div> */}
        
//         <div className="flex gap-2.5">
//               <AddToBag
//                 currency="USD"
//                 description={product.description}
//                 image={product.images[0]}
//                 name={product.name}
//                 price={product.price}
//                 key={product._id}
//                 price_id={product.price_id}
//               />
//               <CheckoutNow
//                 currency="USD"
//                 description={product.description}
//                 image={product.images[0]}
//                 name={product.name}
//                 price={product.price}
//                 key={product._id}
//                 price_id={product.price_id}
//               />
//             </div>
//             </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { notFound } from "next/navigation";
// import AddToBag from "@/app/components/AddToBag";
// import CheckoutNow from "@/app/components/CheckoutNow";

// export default async function ProductDetail({ params }: { params: { id: string } }) {
//   // Fetch the product data
//   const product = await client.fetch(
//     `
//     *[_type == "products" && _id == $id][0]{
//       _id,
//       name,
//       description,
//       price,
//       discountPercentage,
//       sizes,
//       color,
//       "imageUrl": image.asset->url
//     }
//   `,
//     { id: params.id }
//   );

//   // If no product is found, show a 404 page
//   if (!product) {
//     notFound();
//   }

//   return (
//     <section className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         {/* Product Image */}
//         <div className="w-full mb-6">
//           <Image
//             src={urlFor(product.imageUrl).url()}
//             alt={product.name}
//             width={600}
//             height={600}
//             className="rounded-lg object-contain"
//           />
//         </div>

//         {/* Product Name */}
//         <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{product.name}</h1>

//         {/* Product Description */}
//         <p className="text-lg text-gray-600 mb-6 text-center">{product.description}</p>

//         {/* Sizes Section */}
//         {product.sizes && product.sizes.length > 0 && (
//           <div className="mb-6 text-center">
//             <h2 className="text-lg font-bold text-gray-800 mb-2">Available Sizes:</h2>
//             <div className="flex justify-center gap-2">
//               {product.sizes.map((size: string, index: number) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
//                 >
//                   {size}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Price */}
//         <p className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
//           ${product.price.toFixed(2)}
//         </p>

//         {/* Add to Cart and Checkout Buttons */}
//         <div className="flex gap-4 justify-center">
//           <AddToBag
//             currency="USD"
//             description={product.description}
//             image={product.imageUrl}
//             name={product.name}
//             price={product.price}
//             key={product._id}
//             price_id={product._id}
//           />
//           <CheckoutNow
//             currency="USD"
//             description={product.description}
//             image={product.imageUrl}
//             name={product.name}
//             price={product.price}
//             key={product._id}
//             price_id={product._id}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/app/products/ProductDetailClient";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // Fetch the product data
  const product = await client.fetch(
    `
    *[_type == "products" && _id == $id][0]{
      _id,
      name,
      description,
      price,
      discountPercentage,
      sizes,
      color,
      "imageUrl": image.asset->url
    }
  `,
    { id: params.id }
  );

  // If no product is found, show a 404 page
  if (!product) {
    notFound();
  }

  // Pass the product data to the client component
  return <ProductDetailClient product={product} />;
}
