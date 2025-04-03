import type { CollectionConfig } from 'payload';

export const ProductVariants: CollectionConfig = {
  slug: 'product-variants',
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text' },
    { name: 'options', type: 'json' },
    { name: 'price', type: 'number' },
    { name: 'compareAtPrice', type: 'number' },
    { name: 'sku', type: 'text' },
    { name: 'stock', type: 'number' },
    { name: 'isDefault', type: 'checkbox' },
  ],
};
