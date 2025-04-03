import type { CollectionConfig } from 'payload';

export const ProductAttributes: CollectionConfig = {
  slug: 'product-attributes',
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', required: true },
    {
      name: 'options',
      type: 'array',
      fields: [{ name: 'value', type: 'text' }],
    },
  ],
};
