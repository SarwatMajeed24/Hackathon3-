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
