export default {
  name: "afLink",
  title: "Affilliate Links",
  type: "document",
  fields: [
    {
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "company",
      title: "Company",
      type: "reference",
      to: { type: "company" },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "company",
      company: "company.name",
    },
    prepare(selection) {
      const { company } = selection;
      return Object.assign({}, selection, {
        subtitle: company && `by ${company}`,
      });
    },
  },
};
