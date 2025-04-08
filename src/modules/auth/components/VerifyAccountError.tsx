'use client';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { Card } from '@heroui/card';
import { useTranslations } from 'next-intl';

export const VerifyAccountError = () => {
  const t = useTranslations('auth.verifyAccount.error');

  return (
    <Card>
      <div className="flex flex-col gap-3 justify-center items-center py-8 min-h-44">
        <XCircleIcon className="w-24 h-24 text-danger" />
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <p className="text-sm text-gray-500">{t('description')}</p>
      </div>
    </Card>
  );
};
