'use server';

import { getAuthTokenCookie } from './auth/getAuthTokenCookie';
export const getToken = async () => getAuthTokenCookie();
