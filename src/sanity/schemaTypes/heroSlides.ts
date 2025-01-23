export default {
  name: "heroSlides",
  type: "document",
  title: "Hero Slides",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true, // Allow cropping
      },
    },
  ],
};

