import { Card, CardBody } from '@heroui/card';

import { getTranslations } from 'next-intl/server';
import { createLoader, parseAsBoolean } from 'nuqs/server';
import { SignUpForm } from '../components/SignUpForm';
import { SignUpSuccess } from '../components/SignUpSuccess';

export const loadSignUpSearchParams = createLoader({
  signUpSuccess: parseAsBoolean,
});

type PageProps = {
  searchParams: Promise<{ signUpSuccess: string }>;
};

export const SignUpTemplate = async ({ searchParams }: PageProps) => {
  const { signUpSuccess } = await loadSignUpSearchParams(searchParams);
  const t = await getTranslations('auth.signUp');

  return (
    <Card>
      <CardBody>
        <div className="py-8">
          {signUpSuccess ? (
            <>
              <h1 className="font-semibold text-2xl mb-6 text-center">{t('success.title')}</h1>
              <SignUpSuccess />
            </>
          ) : (
            <>
              <h1 className="font-semibold text-2xl mb-6 text-center">{t('title')}</h1>
              <SignUpForm />
            </>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
