'server-only'

import { cookies } from 'next/headers'
import { authCookieOptions, SHOP_AUTH_TOKEN_COOKIE } from './constants'

export const setAuthTokenCookie = async (token: string) => {
  const cookieStore = await cookies()
  cookieStore.set(SHOP_AUTH_TOKEN_COOKIE, token, authCookieOptions)
}
