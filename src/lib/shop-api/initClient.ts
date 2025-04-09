import { env } from '@/lib/config/env';
import { createClient } from './graphql';

type Args = {
  headers?: HeadersInit;
  onResponse?: (res: Response) => void;
};

export const initClient = ({ headers, onResponse }: Args = {}) =>
  createClient({
    credentials: 'include',
    fetcher: (operation) => {
      return fetch(env.VENDURE_API_URL ?? '', {
        method: 'POST',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(operation),
      }).then((response) => {
        onResponse?.(response);
        return response.json();
      });
    },
  });
