import 'server-only';

import { cookies as nextCookies } from 'next/headers';

export const setAuthToken = async (token: string) => {
  const cookies = await nextCookies();

  cookies.set('_prestashop_jwt', token, {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });
};

export const getAuthToken = async () => {
  const cookies = await nextCookies();

  return cookies.get('_prestashop_jwt')?.value;
};

export const removeAuthToken = async () => {
  const cookies = await nextCookies();

  cookies.set('_prestashop_jwt', '', {
    maxAge: -1,
  });
};

export async function clearAuthToken() {
  const cookies = await nextCookies();

  cookies.delete('_prestashop_jwt');
}
