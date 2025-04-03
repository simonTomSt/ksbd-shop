import { Card, CardBody } from '@heroui/card';
import { useTranslations } from 'next-intl';

import { SignUpForm } from '../components/SignUpForm';

export const SignUpTemplate = () => {
  const t = useTranslations('auth.signUp');

  return (
    <Card>
      <CardBody>
        <div className="py-8">
          <h1 className="font-semibold text-2xl mb-6 text-center">
            {t('title')}
          </h1>
          <SignUpForm />
        </div>
      </CardBody>
    </Card>
  );
};
