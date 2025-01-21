// import React from 'react';
// import Link from 'next/link'; // Import Link for navigation
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';

// export default async function Datafetch() {
//   const query = await client.fetch(`
//     *[_type == "products"]{
//       _id, // Include the product ID for dynamic routing
//       name,
//       description,
//       price,
//       discountPercentage,
//       category,
//       isNew,
//       colors,
//       sizes,
//       "imageUrl": image.asset->url
//     }
//   `);
// console.log(query)
//   const groupedData = query.reduce((acc: any, product: any) => {
//     const category = product.category || 'Uncategorized';
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="mx-auto max-w-7xl">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-yellow-600">
//           Premium Product Collection
//         </h1>

//         {Object.keys(groupedData).map((category) => (
//           <div key={category} className="mb-16">
//             <h2 className="text-3xl font-bold text-gray-700 mb-8">{category}</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//               {groupedData[category].map((product: any) => (
//                 <div
//                   key={product._id}
//                   className="bg-white border border-orange-200 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between items-center relative group"
//                 >
//                   {product.isNew && (
//                     <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-bold uppercase">
//                       New Arrival
//                     </span>
//                   )}

//                   <div className="w-full h-44 relative mb-4 flex justify-center items-center overflow-hidden">
//                     <Image
//                       src={urlFor(product.imageUrl).url()}
//                       alt={product.name}
//                       fill
//                       className="object-contain transform group-hover:scale-105 transition-transform"
//                     />
//                   </div>

//                   <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
//                     {product.name}
//                   </h2>
//                   <p className="text-md font-medium text-gray-600 text-center">
//                     ${product.price.toFixed(2)}
//                   </p>

//                   {product.discountPercentage && (
//                     <p className="mt-2 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
//                       Save {product.discountPercentage}%
//                     </p>
//                   )}

//                   {/* Link to Product Details Page */}
//                   <Link href={`/products/${product._id}`}>
//                     <button
//                       className="mt-5 py-2 px-5 text-sm font-semibold text-white bg-orange-500 
//                                  hover:bg-orange-600 rounded-lg transition-colors shadow-md hover:shadow-lg"
//                     >
//                       View Details
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// // /app/category/[category]/page.tsx
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';

// // Sanity query to fetch products by category
// async function getProductsByCategory(category: string) {
//   return await client.fetch(
//     `
//       *[_type == "products" && category == $category]{
//         name,
//         description,
//         price,
//         discountPercentage,
//         category,
//         colors,
//         sizes,
//         "imageUrl": image.asset->url
//       }
//     `,
//     { category }
//   );
// }

// export default async function CategoryPage({ params }: { params: { category: string } }) {
//   const { category } = params;

//   // Fetch products dynamically
//   const products = await getProductsByCategory(category);

//   // Handle case if no products found
//   if (!products || products.length === 0) {
//     return (
//       <section className="min-h-screen flex items-center justify-center">
//         <h1 className="text-2xl font-bold">No products found for "{category}"</h1>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold mb-8">Products in "{category}"</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product: any) => (
//             <div key={product.name} className="bg-white rounded-lg shadow-lg p-4">
//               <Image
//                 src={urlFor(product.imageUrl).url()}
//                 alt={product.name}
//                 width={300}
//                 height={300}
//                 className="rounded-lg object-cover"
//               />
//               <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
//               <p className="text-gray-600 mt-2">{product.description}</p>
//               <p className="text-indigo-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
//               {product.discountPercentage && (
//                 <p className="text-red-500 font-medium mt-1">
//                   Save {product.discountPercentage}%!
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// "use client"
// import React from 'react';
// import Link from 'next/link'; // Import Link for navigation
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';

// export default async function Datafetch() {
//   const query = await client.fetch(`
//     *[_type == "products"]{
//       _id, // Include the product ID for dynamic routing
//       name,
//       description,
//       price,
//       discountPercentage,
//       category,
//       isNew,
//       colors,
//       sizes,
//       "imageUrl": image.asset->url
//     }
//   `);

//   const groupedData = query.reduce((acc: any, product: any) => {
//     const category = product.category || 'Uncategorized';
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   const uniqueCategories = Object.keys(groupedData);

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="mx-auto max-w-7xl">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-yellow-600">
//           Premium Product Collection
//         </h1>

//         {/* Category Links */}
//         <div className="flex flex-wrap justify-center gap-6 mb-16">
//           {uniqueCategories.map((category) => (
//             <Link
//               key={category}
//               href={`/category/${category}`}
//               className="py-2 px-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-all"
//             >
//               {category}
//             </Link>
//           ))}
//         </div>

//         {uniqueCategories.map((category) => (
//           <div key={category} className="mb-16">
//             <h2 className="text-3xl font-bold text-gray-700 mb-8">{category}</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//               {groupedData[category].map((product: any) => (
//                 <div
//                   key={product._id}
//                   className="bg-white border border-orange-200 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between items-center relative group"
//                 >
//                   {product.isNew && (
//                     <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-bold uppercase">
//                       New Arrival
//                     </span>
//                   )}

//                   <div className="w-full h-44 relative mb-4 flex justify-center items-center overflow-hidden">
//                     <Image
//                       src={urlFor(product.imageUrl).url()}
//                       alt={product.name}
//                       fill
//                       className="object-contain transform group-hover:scale-105 transition-transform"
//                     />
//                   </div>

//                   <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
//                     {product.name}
//                   </h2>
//                   <p className="text-md font-medium text-gray-600 text-center">
//                     ${product.price.toFixed(2)}
//                   </p>

//                   {product.discountPercentage && (
//                     <p className="mt-2 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
//                       Save {product.discountPercentage}%
//                     </p>
//                   )}

//                   {/* Link to Product Details Page */}
//                   <Link href={`/products/${product._id}`}>
//                     <button
//                       className="mt-5 py-2 px-5 text-sm font-semibold text-white bg-orange-500 
//                                  hover:bg-orange-600 rounded-lg transition-colors shadow-md hover:shadow-lg"
//                     >
//                       View Details
//                     </button>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { client } from '@/sanity/lib/client';
import DatafetchClient from './DatafetchClient';

export default async function Datafetch() {
    const query = await client.fetch(`
        *[_type == "products"]{
            _id,
            name,
            description,
            price,
            discountPercentage,
            category,
            isNew,
            colors,
            sizes,
            "imageUrl": image.asset->url
        }
    `);

    return <DatafetchClient data={query} />;
}
