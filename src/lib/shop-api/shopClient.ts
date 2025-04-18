import { getLocale } from 'next-intl/server';
import { getToken } from './actionts';
import { setAuthTokenCookie } from './auth/setAuthTokenCookie';

import { env } from '@/lib/config/env';
import { createClient } from './graphql';

export const shopClient = createClient({
  credentials: 'include',
  fetcher: async (operation) => {
    const authToken = await getToken();
    const locale = await getLocale();
    return fetch(`${env.VENDURE_API_URL ?? ''}?languageCode=${locale}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(authToken && { Authorization: `Bearer ${authToken}` }),
      },
      body: JSON.stringify(operation),
    }).then(async (response) => {
      const token = response.headers.get('vendure-auth-token');
      if (token) {
        await setAuthTokenCookie(token);
      }
      return response.json();
    });
  },
});
