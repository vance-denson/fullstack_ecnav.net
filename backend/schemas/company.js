export default {
  name: "company",
  title: "Companies",
  type: "document",
  fields: [
    {
      name: "published",
      title: "Published",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "brandImage",
      title: "Brand Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "afLinks",
      title: "Affilliate / Promo Links",
      type: "array",
      of: [{ type: "reference", to: { type: "afLink" } }],
    },
  ],

  preview: {
    select: {
      title: "name",
      media: "brandImage",
    },
  },
};
