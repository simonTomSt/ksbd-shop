import type { CollectionConfig } from 'payload'

import { UserRole } from '../enums/UserRole'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'role',
      type: 'select',
      required: true,
      options: Object.values(UserRole).map((role) => ({
        label: role,
        value: role,
      })),
    },
  ],
}
