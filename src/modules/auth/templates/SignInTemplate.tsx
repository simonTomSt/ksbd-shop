import { Card, CardBody } from '@heroui/card';
import { useTranslations } from 'next-intl';
import { SignInForm } from '../components/SignInForm';

export const SignInTemplate = () => {
  const t = useTranslations('auth.signIn');

  return (
    <Card>
      <CardBody>
        <div className="py-8">
          <h1 className="font-semibold text-2xl mb-6 text-center">{t('title')}</h1>

          <SignInForm />
        </div>
      </CardBody>
    </Card>
  );
};
