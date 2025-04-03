import type { CollectionConfig } from 'payload'

import { allowRoles } from '../access/allowRoles'
import { UserRole } from '../enums/UserRole'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true,
    create: allowRoles([UserRole.Manager, UserRole.Editor, UserRole.GodAdmin]),
    update: allowRoles([UserRole.Manager, UserRole.Editor, UserRole.GodAdmin]),
    delete: allowRoles([UserRole.Manager, UserRole.Editor, UserRole.GodAdmin]),
  },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', unique: true },
    { name: 'description', type: 'richText', localized: true },
    { name: 'price', type: 'number', required: true },
    { name: 'compareAtPrice', type: 'number' },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'attributes',
      type: 'relationship',
      relationTo: 'product-attributes',
      hasMany: true,
    },
    {
      name: 'variants',
      type: 'relationship',
      relationTo: 'product-variants',
      hasMany: true,
    },
    { name: 'images', type: 'upload', relationTo: 'media', hasMany: true },
    { name: 'stock', type: 'number' },
    { name: 'sku', type: 'text' },
    { name: 'isPublished', type: 'checkbox', defaultValue: false },
    { name: 'isFeatured', type: 'checkbox', defaultValue: false },
  ],
}
