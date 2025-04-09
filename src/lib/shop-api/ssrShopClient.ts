'server-only';
import { getAuthTokenCookie } from './auth/getAuthTokenCookie';
import { initClient } from './initClient';

export const ssrShopClient = async () => {
  const authToken = await getAuthTokenCookie();

  return initClient({
    headers: {
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
  });
};
