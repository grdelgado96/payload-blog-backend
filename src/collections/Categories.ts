import { CollectionConfig } from "payload/types";
export const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Category",
    plural: "Categories",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Category title",
    },
    {
      name: "slug",
      type: "text",
      label: "Category Slug",
    },
    {
      name: "description",
      type: "text",
      label: "Category Description",
    },
  ],
};
