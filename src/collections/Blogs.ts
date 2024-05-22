import { CollectionConfig } from "payload/types";
export const Blogs: CollectionConfig = {
  slug: "blogs",
  labels: {
    singular: "Blog",
    plural: "Blogs",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: "Title of blog article",
    },
    {
      name: "slug",
      type: "text",
      label: "Slug of blog article",
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "authors",
    },
    {
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "description",
      label: "Description",
      type: "text",
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
    },
    {
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media",
    },
  ],
  access: {
    read: () => true, // Allow public read access
    create: ({ req }) => Boolean(req.user), // Restrict create to authenticated users
    update: ({ req }) => Boolean(req.user), // Restrict update to authenticated users
    delete: ({ req }) => Boolean(req.user), // Restrict delete to authenticated users
  },
};
