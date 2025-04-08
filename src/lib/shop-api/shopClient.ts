'server-only';
import { env } from '../config/env';
import { setAuthTokenCookie } from './auth';
import { getAuthTokenCookie } from './auth/getAuthTokenCookie';
import { createClient } from './graphql';

export const makeShopClient = async () => {
  const authToken = await getAuthTokenCookie();

  return createClient({
    url: env.VENDURE_API_URL,
    headers: {
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
  });
};

// Create a server action for handling the auth token
async function handleAuthToken(response: Response) {
  'use server';

  const authToken = response.headers.get('vendure-auth-token');
  if (authToken) {
    await setAuthTokenCookie(authToken);
  }
  return response.json();
}

export const shopClient = createClient({
  url: env.VENDURE_API_URL,
  fetcher: async (operation) => {
    const response = await fetch(env.VENDURE_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(operation),
    });

    // Use the server action to handle the auth token
    return handleAuthToken(response);
  },
  headers: async () => {
    const authToken = await getAuthTokenCookie();
    return {
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    };
  },
});
