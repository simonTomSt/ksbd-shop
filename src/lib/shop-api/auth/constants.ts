export const SHOP_AUTH_TOKEN_COOKIE = '_ksbd_auth_token'

export const authCookieOptions = {
  httpOnly: true,
  secure: true,
  maxAge: 60 * 60 * 24 * 30, // 30 days
  path: '/',
}
