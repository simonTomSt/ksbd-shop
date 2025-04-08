import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
export const SignUpSuccess = () => {
  const t = useTranslations('auth.signUp.success');
  return (
    <div className="flex flex-col items-center justify-center">
      <EnvelopeIcon className="w-24 h-24 text-primary" />
      <p className="mt-2 font-medium text-foreground">{t('description')}</p>
    </div>
  );
};
