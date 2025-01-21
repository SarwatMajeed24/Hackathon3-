

// "use client";

// import React, { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// export default function HeroSection() {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Fetch carousel data from Sanity
//   useEffect(() => {
//     const fetchSlides = async () => {
//       const data = await client.fetch(`
//         *[_type == "heroSlides"]{
//           title,
//           subtitle,
//           "imageUrl": image.asset->url
//         }
//       `);
//       console.log("Fetched Slides:", data); // Debug fetched data
//       setSlides(data);
//     };

//     fetchSlides();
//   }, []);

//   // Slide navigation
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   if (slides.length === 0) return <p>Loading...</p>;

//   return (
//     <section className="relative w-full h-[500px] overflow-hidden">
//       {/* Slides */}
//       <div
//         className="absolute inset-0 flex transition-transform duration-500 ease-in-out transform"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0 h-full relative">
//             {slide.imageUrl ? (
//               <Image
//                 src={urlFor(slide.imageUrl).url()}
//                 alt={slide.title || "Slide Image"}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0"
//               />
//             ) : (
//               <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                 <p className="text-gray-500">No Image Available</p>
//               </div>
//             )}
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
//               <h1 className="text-4xl font-bold mb-4">{slide.title || "Default Title"}</h1>
//               <p className="text-lg">{slide.subtitle || "Default Subtitle"}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-900"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-900"
//       >
//         &#8250;
//       </button>
//     </section>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// export default function HeroSection() {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Fetch carousel data from Sanity
//   useEffect(() => {
//     const fetchSlides = async () => {
//       try {
//         const data = await client.fetch(`
//           *[_type == "heroSlides"]{
//             title,
//             subtitle,
//             "imageUrl": image.asset->url
//           }
//         `);
//         console.log("Fetched Slides:", data); // Debug fetched data
//         setSlides(data);
//       } catch (error) {
//         console.error("Error fetching slides:", error);
//       }
//     };

//     fetchSlides();
//   }, []);

//   // Automatically transition slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [slides.length]);

//   // Slide navigation
//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   if (slides.length === 0) return <p>Loading...</p>;

//   return (
//     <section className="relative w-full h-[500px] overflow-hidden">
//       {/* Slides */}
//       <div
//         className="absolute inset-0 flex transition-transform duration-500 ease-in-out transform"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0 h-full relative">
//             {slide.imageUrl ? (
//               <Image
//                 src={urlFor(slide.imageUrl).url()}
//                 alt={slide.title || "Slide Image"}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0"
//               />
//             ) : (
//               <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                 <p className="text-gray-500">No Image Available</p>
//               </div>
//             )}
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
//               <h1 className="text-4xl font-bold mb-4">{slide.title || "Default Title"}</h1>
//               <p className="text-lg">{slide.subtitle || "Default Subtitle"}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-900"
//       >
//         &#8249;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-900"
//       >
//         &#8250;
//       </button>
//     </section>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// export default function HeroSection() {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Fetch carousel data from Sanity
//   useEffect(() => {
//     const fetchSlides = async () => {
//       try {
//         const data = await client.fetch(`
//           *[_type == "heroSlides"]{
//             title,
//             subtitle,
//             "imageUrl": image.asset->url
//           }
//         `);

//         console.log("Fetched Data:", JSON.stringify(data, null, 2)); // Debug fetched data

//         // Validate fetched data
//         if (Array.isArray(data) && data.length > 0) {
//           setSlides(data);
//         } else {
//           console.warn("No slides found. Please check your Sanity data or query.");
//         }
//       } catch (error) {
//         console.error("Error fetching slides from Sanity:", error);
//       }
//     };

//     fetchSlides();
//   }, []);

//   // Automatically transition slides
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [slides.length]);

//   if (slides.length === 0) return <p>Loading slides...</p>;

//   return (
//     <section className="relative w-full h-[500px] overflow-hidden">
//       {/* Slides */}
//       <div
//         className="absolute inset-0 flex transition-transform duration-500 ease-in-out transform"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0 h-full relative">
//             {slide.imageUrl ? (
//               <Image
//                 src={urlFor(slide.imageUrl).url()}
//                 alt={slide.title || "Slide Image"}
//                 layout="fill"
//                 objectFit="cover"
//                 className="absolute inset-0"
//               />
//             ) : (
//               <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                 <p className="text-gray-500">No Image Available</p>
//               </div>
//             )}
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
//               <h1 className="text-4xl font-bold mb-4">{slide.title || "Default Title"}</h1>
//               <p className="text-lg">{slide.subtitle || "Default Subtitle"}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// export default function HeroSection() {
//   const [slides, setSlides] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Fetch carousel data from Sanity
//   useEffect(() => {
//     const fetchSlides = async () => {
//       try {
//         const data = await client.fetch(`
//           *[_type == "heroSlides"]{
//             title,
//             subtitle,
//             "imageUrl": image.asset->url
//           }
//         `);

//         if (Array.isArray(data) && data.length > 0) {
//           setSlides(data);
//         } else {
//           console.warn("No slides found. Please check your Sanity data or query.");
//         }
//       } catch (error) {
//         console.error("Error fetching slides from Sanity:", error);
//       }
//     };

//     fetchSlides();
//   }, []);

//   // Automatically transition slides
//   useEffect(() => {
//     if (slides.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//       }, 5000); // Change slide every 5 seconds

//       return () => clearInterval(interval); // Cleanup on unmount
//     }
//   }, [slides.length]);

//   if (slides.length === 0) return <p>Loading slides...</p>;

//   return (
//     <section className="relative w-full h-[500px] overflow-hidden">
//       {/* Slides */}
//       <div
//         className="absolute inset-0 flex transition-transform duration-500 ease-in-out transform"
//         style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="w-full flex-shrink-0 h-full relative">
//             {slide.imageUrl ? (
//               <Image
//                 src={urlFor(slide.imageUrl).url()}
//                 alt={slide.title || "Slide Image"}
//                 layout="fill"
//                 objectFit="cover"
//                 priority // Ensures faster loading
//                 onError={(e) => console.error("Image failed to load:", e)}
//                 className="absolute inset-0"
//               />
//             ) : (
//               <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                 <p className="text-gray-500">No Image Available</p>
//               </div>
//             )}
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
//               <h1 className="text-4xl font-bold mb-4">{slide.title || "Default Title"}</h1>
//               <p className="text-lg">{slide.subtitle || "Default Subtitle"}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// import { client } from "@/sanity/lib/client";
// import HeroSectionClient from "./HeroSectionClient";

// export interface Slide {
//   title: string;
//   subtitle: string;
//   imageUrl: string;
// }

// export default async function HeroSectionServer() {
//   // Fetch data from Sanity
//   const slides: Slide[] = await client.fetch(`
//     *[_type == "heroSlides"]{
//       title,
//       subtitle,
//       "imageUrl": image.asset->_id
//     }
//   `);

//   // Pass fetched slides to the Client Component
//   return <HeroSectionClient slides={slides} />;
// }

// import { client } from "@/sanity/lib/client";
// import HeroSectionClient from "./HeroSectionClient";

// export interface Slide {
//   title: string;
//   subtitle: string;
//   imageUrl: string;
// }

// export default async function HeroSectionServer() {
//   // Fetch slides from Sanity
//   const slides: Slide[] = await client.fetch(`
//     *[_type == "heroSlides"]{
//       title,
//       subtitle,
//       "imageUrl": image.asset->_id
//     }
//   `);

//   return <HeroSectionClient slides={slides} />;
// }
// HeroSectionServer.tsx (Server Component)

// import { client } from "@/sanity/lib/client";
// import HeroSectionClient from "./HeroSectionClient";

// export interface Slide {
//   title: string;
//   subtitle: string;
//   imageUrl: string;
// }

// export default async function HeroSectionServer() {
//   // Fetch data from Sanity
//   const slides: Slide[] = await client.fetch(`
//     *[_type == "heroSlides"]{
//       title,
//       subtitle,
//       "imageUrl": image.asset->_ref
//     }
//   `);

//   // Pass fetched slides to the Client Component
//   return <HeroSectionClient slides={slides} />;
// }



// import { client } from "@/sanity/lib/client";
// import HeroSectionClient from "./HeroSectionClient";

// export interface Slide {
//   title: string;
//   subtitle: string;
//   imageUrl: string;
// }

// export default async function HeroSectionServer() {
//   // Fetch slides from Sanity
//   const slides: Slide[] = await client.fetch(`
//     *[_type == "heroSlides"]{
//       title,
//       subtitle,
//       "imageUrl": image.asset->url // Fetching the image URL directly
//     }
//   `);

//   // Pass slides to the Client Component
//   return <HeroSectionClient slides={slides} />;
// }

// import { client } from "@/sanity/lib/client";
// import HeroSectionClient from "./HeroSectionClient";

// export interface Slide {
//   title: string;
//   subtitle: string;
//   imageUrl: string;
// }

// export default async function HeroSectionServer() {
//   // Fetch slides from Sanity
//   const slides: Slide[] = await client.fetch(`
//     *[_type == "heroSlides"]{
//       title,
//       subtitle,
//       "imageUrl": image.asset->url // Fetching the URL directly
//     }
//   `);

//   // Pass fetched slides to the client component
//   return <HeroSectionClient slides={slides} />;
// }
import { client } from "@/sanity/lib/client";
import HeroSectionClient from "./HeroSectionClient";

export interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default async function HeroSectionServer() {
  // Fetch slides from Sanity
  const slides: Slide[] = await client.fetch(`
    *[_type == "heroSlides"]{
      title,
      subtitle,
      "imageUrl": image.asset->url
    }
  `);

  // Pass fetched slides to the client component
  return <HeroSectionClient slides={slides} />;
}
