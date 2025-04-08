import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Card } from '@heroui/card';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { createLoader, parseAsString } from 'nuqs/server';
import { verifyAccount } from '../api/verifyAccount';

export const loadVerifyAccountSearchParams = createLoader({
  token: parseAsString,
});

type PageProps = {
  searchParams: Promise<{ token: string }>;
};

export const VerifyAccountTemplate = async ({ searchParams }: PageProps) => {
  const { token } = await loadVerifyAccountSearchParams(searchParams);
  const t = await getTranslations('auth.verifyAccount');

  if (!token) {
    return notFound();
  }

  const currentUser = await verifyAccount(token);

  if (currentUser.id) {
    return (
      <Card>
        <div className="flex flex-col gap-3 justify-center items-center py-8 min-h-44">
          <CheckCircleIcon className="w-24 h-24 text-success" />
          <h1 className="text-2xl font-bold">{t('success.title')}</h1>
          <p className="text-sm text-gray-500">{t('success.description')}</p>
        </div>
      </Card>
    );
  }

  return (
    <div>
      <p>{t('processing')}</p>
    </div>
  );
};
