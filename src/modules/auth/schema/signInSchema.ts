import { z } from 'zod';

import { TFunction } from '@/lib/i18n/types';

export const signInSchema = (t: TFunction<'auth.signIn'>) =>
  z.object({
    email: z.string({ message: t('email.errors.required') }).email(t('email.errors.invalid')),
    password: z.string({ message: t('password.errors.required') }).min(8),
  });

export type SignInFormValues = z.infer<ReturnType<typeof signInSchema>>;
