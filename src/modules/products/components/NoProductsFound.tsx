import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { cn } from '@heroui/theme';
import { useTranslations } from 'next-intl';

type Props = {
  className?: string;
};

export const NoProductsFound = ({ className }: Props) => {
  const t = useTranslations('products.noProductsFound');

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-12 px-4 text-center text-foreground-600',
        className,
      )}
    >
      <DocumentMagnifyingGlassIcon className="h-12 w-12" />
      <h3 className="text-lg font-semibold mb-2">{t('title')}</h3>
      <p className="text-sm text-foreground-400">{t('description')}</p>
    </div>
  );
};
