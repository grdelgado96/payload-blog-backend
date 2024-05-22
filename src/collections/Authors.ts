import { CollectionConfig } from "payload/types";
export const Authors: CollectionConfig = {
  slug: "authors",
  labels: {
    singular: "Author",
    plural: "Authors",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Author name",
    },
    {
      name: "slug",
      type: "text",
      label: "Author Slug",
    },
  ],
};
