import { cookies } from 'next/headers'
import { SHOP_AUTH_TOKEN_COOKIE } from './constants'

export const deleteAuthTokenCookie = async () => {
  const cookieStore = await cookies()
  cookieStore.delete(SHOP_AUTH_TOKEN_COOKIE)
}
