import { Access } from 'payload'

export const allowCustomer: Access = ({ req: { user } }) => {
  if (user?.collection !== 'customers') return false
  if (!user.isActive) return false

  return true
}
