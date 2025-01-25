// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';
// import Link from 'next/link';

// export default async function ProductsPage() {
//   // Fetch the products from the Sanity CMS
//   const products = await client.fetch(`
//     *[_type == "products"]{
//       _id,
//       name,
//       price,
//       discountPercentage,
//       category,
//       isNew,
//       "imageUrl": image.asset->url
//     }
//   `);

//   // Group products by category
//   const groupedProducts = products.reduce((acc: any, product: any) => {
//     const category = product.category || 'Uncategorized';
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});

//   const categories = Object.keys(groupedProducts);

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="mx-auto max-w-7xl">
//         {/* Page Title */}
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-yellow-600">
//           Premium Product Collection
//         </h1>

//         {/* Category Links */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           {categories.map((category) => (
//             <a
//               key={category}
//               href={`#${category.replace(/\s+/g, '-').toLowerCase()}`}
//               className="py-2 px-4 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-all"
//             >
//               {category}
//             </a>
//           ))}
//         </div>

//         {/* Loop through categories */}
//         {categories.map((category) => (
//           <div
//             key={category}
//             id={category.replace(/\s+/g, '-').toLowerCase()}
//             className="mb-16"
//           >
//             <h2 className="text-3xl font-bold text-orange-600 mb-8">
//               {category}
//             </h2>

//             {/* Display products in the category */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//               {groupedProducts[category].map((product: any) => (
//                 <div
//                   key={product._id}
//                   className="bg-white border border-orange-200 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between items-center relative group"
//                 >
//                   {/* New Arrival Badge */}
//                   {product.isNew && (
//                     <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-bold uppercase">
//                       New Arrival
//                     </span>
//                   )}

//                   {/* Product Image */}
//                   <div className="w-full h-44 relative mb-4 flex justify-center items-center overflow-hidden">
//                     <Image
//                       src={urlFor(product.imageUrl).url()}
//                       alt={product.name}
//                       fill
//                       className="object-contain transform group-hover:scale-105 transition-transform"
//                     />
//                   </div>

//                   {/* Product Name */}
//                   <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
//                     {product.name}
//                   </h2>

//                   {/* Product Price */}
//                   <p className="text-md font-medium text-gray-600 text-center">
//                     ${product.price.toFixed(2)}
//                   </p>

//                   {/* Discount Information */}
//                   {product.discountPercentage && (
//                     <p className="mt-2 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
//                       Save {product.discountPercentage}%
//                     </p>
//                   )}

//                   {/* View Details Button */}
//                   <Link href={`/products/${product._id}`}>
//                     <button
//                       className="mt-5 py-2 px-5 text-sm font-semibold text-white bg-orange-500 
//                                    hover:bg-orange-600 rounded-lg transition-colors shadow-md hover:shadow-lg"
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

// // import { client } from '@/sanity/lib/client';
// // import { urlFor } from '@/sanity/lib/image';
// // import Image from 'next/image';
// // import Link from 'next/link';

// // export default async function ProductsPage() {
// //   // Fetch the products from the Sanity CMS
// //   const products = await client.fetch(`
// //     *[_type == "products"]{
// //       _id,
// //       name,
// //       price,
// //       discountPercentage,
// //       category,
// //       isNew,
// //       "imageUrl": image.asset->url
// //     }
// //   `);

// //   // Group products by category
// //   const groupedProducts = products.reduce((acc: any, product: any) => {
// //     const category = product.category || 'Uncategorized';
// //     if (!acc[category]) {
// //       acc[category] = [];
// //     }
// //     acc[category].push(product);
// //     return acc;
// //   }, {});

// //   const categories = Object.keys(groupedProducts);

// //   return (
// //     <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
// //       <div className="mx-auto max-w-7xl">
// //         {/* Page Title */}
// //         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-yellow-600">
// //           Premium Product Collection
// //         </h1>

// //         {/* Category Links */}
// //         <div className="flex flex-wrap justify-center gap-4 mb-10">
// //           {categories.map((category) => (
// //             <Link 
// //             className="py-2 px-4 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-all"
// //               key={category}
// //               href={`/categories/${encodeURIComponent(
// //                 category.toLowerCase()
// //               )}`}
// //             >
// //                 {category}
            
// //             </Link>
// //           ))}
// //         </div>

// //         {/* Loop through categories */}
// //         {categories.map((category) => (
// //           <div key={category} className="mb-16">
// //             <h2 className="text-3xl font-bold text-orange-600 mb-8">{category}</h2>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
// //               {groupedProducts[category].map((product: any) => (
// //                 <div
// //                   key={product._id}
// //                   className="bg-white border border-orange-200 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between items-center relative group"
// //                 >
// //                   {/* New Arrival Badge */}
// //                   {product.isNew && (
// //                     <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-bold uppercase">
// //                       New Arrival
// //                     </span>
// //                   )}

// //                   {/* Product Image */}
// //                   <div className="w-full h-44 relative mb-4 flex justify-center items-center overflow-hidden">
// //                     <Image
// //                       src={urlFor(product.imageUrl).url()}
// //                       alt={product.name}
// //                       fill
// //                       className="object-contain transform group-hover:scale-105 transition-transform"
// //                     />
// //                   </div>

// //                   {/* Product Name */}
// //                   <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
// //                     {product.name}
// //                   </h2>

// //                   {/* Product Price */}
// //                   <p className="text-md font-medium text-gray-600 text-center">
// //                     ${product.price.toFixed(2)}
// //                   </p>

// //                   {/* Discount Information */}
// //                   {product.discountPercentage && (
// //                     <p className="mt-2 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
// //                       Save {product.discountPercentage}%
// //                     </p>
// //                   )}

// //                   {/* View Details Button */}
// //                   <Link href={`/products/${product._id}`}>
// //                     <button
// //                       className="mt-5 py-2 px-5 text-sm font-semibold text-white bg-orange-500 
// //                                    hover:bg-orange-600 rounded-lg transition-colors shadow-md hover:shadow-lg"
// //                     >
// //                       View Details
// //                     </button>
// //                   </Link>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductsPage() {
  // Fetch the products from the Sanity CMS
  const products = await client.fetch(`
    *[_type == "products"]{
      _id,
      name,
      price,
      discountPercentage,
      category,
      isNew,
      "imageUrl": image.asset->url
    }
  `);

  // Group products by category
  const groupedProducts = products.reduce((acc: any, product: any) => {
    const category = product.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  const categories = Object.keys(groupedProducts);

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-yellow-600">
          Premium Product Collection
        </h1>

        {/* Category Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${encodeURIComponent(category)}`} // Dynamic category link
              className="py-2 px-4 bg-orange-500 text-white font-bold rounded-lg shadow-md hover:bg-orange-600 transition-all"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Loop through categories */}
        {categories.map((category) => (
          <div
            key={category}
            id={category.replace(/\s+/g, '-').toLowerCase()}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-orange-600 mb-8">
              {category}
            </h2>

            {/* Display products in the category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {groupedProducts[category].map((product: any) => (
                <div
                  key={product._id}
                  className="bg-white border border-orange-200 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between items-center relative group"
                >
                  {/* New Arrival Badge */}
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-bold uppercase">
                      New Arrival
                    </span>
                  )}

                  {/* Product Image */}
                  <div className="w-full h-44 relative mb-4 flex justify-center items-center overflow-hidden">
                    <Image
                      src={urlFor(product.imageUrl).url()}
                      alt={product.name}
                      fill
                      className="object-contain transform group-hover:scale-105 transition-transform"
                    />
                  </div>

                  {/* Product Name */}
                  <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
                    {product.name}
                  </h2>

                  {/* Product Price */}
                  <p className="text-md font-medium text-gray-600 text-center">
                    ${product.price.toFixed(2)}
                  </p>

                  {/* Discount Information */}
                  {product.discountPercentage && (
                    <p className="mt-2 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
                      Save {product.discountPercentage}%
                    </p>
                  )}

                  {/* View Details Button */}
                  <Link href={`/products/${product._id}`}>
                    <button
                      className="mt-5 py-2 px-5 text-sm font-semibold text-white bg-orange-500 
                                   hover:bg-orange-600 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
