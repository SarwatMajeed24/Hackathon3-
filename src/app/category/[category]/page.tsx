// // // /app/category/[category]/page.tsx
// // import { client } from '@/sanity/lib/client';
// // import { urlFor } from '@/sanity/lib/image';
// // import Image from 'next/image';

// // // Function to fetch products based on the category
// // async function getProductsByCategory(category: string) {
// //   const products = await client.fetch(
// //     `
// //       *[_type == "products" && category == $category]{
// //         name,
// //         description,
// //         price,
// //         discountPercentage,
// //         category,
// //         colors,
// //         sizes,
// //         "imageUrl": image.asset->url
// //       }
// //     `,
// //     { category }
// //   );
// //   return products;
// // }

// // export default async function CategoryPage({ params }: { params: { category: string } }) {
// //   const { category } = params;
// //   const products = await getProductsByCategory(category);

// //   if (products.length === 0) {
// //     return <h1 className="text-center text-2xl font-bold mt-12">No products found in "{category}"</h1>;
// //   }

// //   return (
// //     <section className="min-h-screen py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
// //       <div className="max-w-6xl mx-auto">
// //         <h1 className="text-4xl font-bold mb-8">Products in "{category}"</h1>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {products.map((product: any) => (
// //             <div key={product.name} className="bg-white rounded-lg shadow-lg p-4">
// //               <Image
// //                 src={urlFor(product.imageUrl).url()}
// //                 alt={product.name}
// //                 width={300}
// //                 height={300}
// //                 className="rounded-lg object-cover"
// //               />
// //               <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
// //               <p className="text-gray-600 mt-2">{product.description}</p>
// //               <p className="text-indigo-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
// //               {product.discountPercentage && (
// //                 <p className="text-red-500 font-medium mt-1">
// //                   Save {product.discountPercentage}%!
// //                 </p>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // /app/category/[category]/page.tsx
// // import { client } from '@/sanity/lib/client';
// // import { urlFor } from '@/sanity/lib/image';
// // import Image from 'next/image';


// // // Function to fetch products based on category
// // async function getProductsByCategory(category: string) {
// //   const products = await client.fetch(
// //     `
// //       *[_type == "products" && category == $category]{
// //         name,
// //         description,
// //         price,
// //         discountPercentage,
// //         category,
// //         colors,
// //         sizes,
// //         "imageUrl": image.asset->url
// //       }
// //     `,
// //     { category }
// //   );
// //   return products;
// // }

// // export default async function CategoryPage({ params }: { params: { category: string } }) {
// //   const { category } = params;
// //   const products = await getProductsByCategory(category);

// //   if (products.length === 0) {
// //     return <h1 className="text-center text-2xl font-bold mt-12">No products found in "{category}"</h1>;
// //   }

// //   return (
// //     <section className="min-h-screen py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
// //       <div className="max-w-6xl mx-auto">
// //         <h1 className="text-4xl font-bold mb-8">Products in "{category}"</h1>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {products.map((product: any) => (
// //             <div key={product.name} className="bg-white rounded-lg shadow-lg p-4">
// //               <Image
// //                 src={urlFor(product.imageUrl).url()}
// //                 alt={product.name}
// //                 width={300}
// //                 height={300}
// //                 className="rounded-lg object-cover"
// //               />
// //               <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
// //               <p className="text-gray-600 mt-2">{product.description}</p>
// //               <p className="text-indigo-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
// //               {product.discountPercentage && (
// //                 <p className="text-red-500 font-medium mt-1">
// //                   Save {product.discountPercentage}%!
// //                 </p>
// //               )}
                 
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

// Function to fetch products based on category
async function getProductsByCategory(category: string) {
  const products = await client.fetch(
    `
      *[_type == "products" && category == $category]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        category,
        colors,
        sizes,
        "imageUrl": image.asset->url
      }
    `,
    { category }
  );
  return products;
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const products = await getProductsByCategory(category);

  if (products.length === 0) {
    return <h1 className="text-center text-2xl font-bold mt-12">No products found in {category}</h1>;
  }

  return (
    <section className="min-h-screen py-12 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Products in {category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg p-4">
              <Image
                src={urlFor(product.imageUrl).url()}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
                           <p className="text-indigo-600 font-semibold mt-2">${product.price.toFixed(2)}</p>
              {product.discountPercentage && (
                <p className="text-red-500 font-medium mt-1">
                  Save {product.discountPercentage}%!
                </p>
              )}
              {/* Button to navigate to product detail page */}
              <Link
                href={`/products/${product._id}`}
                className="mt-4 inline-block text-center bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}


// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';

// export default async function CategoryPage({ params }: { params: { category: string } }) {
//   const { category } = params;

//   const products = await client.fetch(
//     `
//       *[_type == "products" && category == $category]{
//         _id,
//         name,
//         price,
//         discountPercentage,
//         isNew,
//         "imageUrl": image.asset->url
//       }
//     `,
//     { category }
//   );

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6 md:px-12 lg:px-20">
//       <div className="mx-auto max-w-7xl">
//         <h1 className="text-4xl font-bold text-center mb-10 text-orange-600 capitalize">
//           {category}
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {products.map((product: any) => (
//             <div
//               key={product._id}
//               className="bg-white border border-orange-200 rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between items-center relative group"
//             >
//               {product.isNew && (
//                 <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-bold uppercase">
//                   New Arrival
//                 </span>
//               )}
//               <div className="w-full h-44 relative mb-4 flex justify-center items-center overflow-hidden">
//                 <Image
//                   src={urlFor(product.imageUrl).url()}
//                   alt={product.name}
//                   fill
//                   className="object-contain transform group-hover:scale-105 transition-transform"
//                 />
//               </div>
//               <h2 className="text-lg font-bold text-gray-800 mb-1 text-center">
//                 {product.name}
//               </h2>
//               <p className="text-md font-medium text-gray-600 text-center">
//                 ${product.price.toFixed(2)}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


