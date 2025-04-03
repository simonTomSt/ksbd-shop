import { UserRole } from '@/enums/UserRole'
import { Access } from 'payload'

export const allowRoles =
  (allowedRoles: UserRole[]): Access =>
  ({ req: { user } }) => {
    if (!user) return false
    const userRole = user?.role as UserRole

    return allowedRoles.includes(userRole) || userRole === UserRole.GodAdmin
  }
