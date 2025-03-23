'use server';

import { PrestaShop } from './prestaShop';

export const api = new PrestaShop({
  baseURL: `${process.env.NEXT_PUBLIC_PS_API_URL}/api`,
  apiKey: process.env.NEXT_PUBLIC_PS_API_KEY as string,
});
