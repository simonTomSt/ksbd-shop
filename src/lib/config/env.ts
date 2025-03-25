import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']),
  PS_API_URL: z.string().url(),
  PS_API_KEY: z.string(),
  JWT_SECRET: z.string(),
});

// Validate the process.env
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  // eslint-disable-next-line no-console
  console.error(
    '❌ Invalid environment variables:',
    _env.error.flatten().fieldErrors,
  );
  throw new Error('Environment validation failed. Check .env file.');
}

export const env = _env.data;
