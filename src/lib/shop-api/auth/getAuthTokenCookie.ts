import { cookies } from 'next/headers'
import { SHOP_AUTH_TOKEN_COOKIE } from './constants'

export const getAuthTokenCookie = async () => {
  const cookieStore = await cookies()
  return cookieStore.get(SHOP_AUTH_TOKEN_COOKIE)?.value
}
