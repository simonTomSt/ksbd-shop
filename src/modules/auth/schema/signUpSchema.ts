import { z } from 'zod';

import { TFunction } from '@/lib/i18n/types';

export const signUpSchema = (t: TFunction<'auth.signUp'>) =>
  z.object({
    email: z.string({ message: t('email.errors.required') }).email(t('email.errors.invalid')),
    password: z
      .string({ message: t('password.errors.required') })
      .min(8, t('password.errors.minlength'))
      .regex(/[A-Z]/, t('password.errors.uppercaseLetter'))
      .regex(/[a-z]/, t('password.errors.lowercaseLetter'))
      .regex(/[0-9]/, t('password.errors.number'))
      .regex(/[^A-Za-z0-9]/, t('password.errors.special')),
    firstName: z
      .string({ message: t('firstName.errors.required') })
      .min(3, t('firstName.errors.minlength')),
    lastName: z
      .string({ message: t('lastName.errors.required') })
      .min(3, t('lastName.errors.minlength')),
    newsletter: z.boolean().optional(),
    privacyPolicyAgreement: z.boolean().refine((val) => val === true, {
      message: t('privacyPolicyAgreement.errors.required'),
    }),
  });

export type SignUpFormValues = z.infer<ReturnType<typeof signUpSchema>>;
