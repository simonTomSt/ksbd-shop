'server-only';
import { env } from '../config/env';
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

export const shopClient = createClient({
  url: env.VENDURE_API_URL,
  headers: async () => {
    const authToken = await getAuthTokenCookie();
    return {
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    };
  },
});
