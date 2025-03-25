import { env } from './config/env';
import { PrestaShop } from './prestaShop';

export const api = new PrestaShop({
  baseURL: env.PS_API_URL,
  apiKey: env.PS_API_KEY,
});
