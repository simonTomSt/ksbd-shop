'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@heroui/input';
import { useTranslations } from 'next-intl';

import { useSearchModalControl } from '../hooks/useSearchModalControl';

export const SearchInput = () => {
  const t = useTranslations('search');
  const [, setSearchModal] = useSearchModalControl();

  return (
    <button
      aria-label="search products"
      className="w-full block"
      onClick={() => setSearchModal(true)}
    >
      <Input
        classNames={{
          inputWrapper: 'w-full',
        }}
        placeholder={t('inputPlaceholder')}
        size="lg"
        startContent={<MagnifyingGlassIcon className="w-4 h-4" />}
        type="search"
      />
    </button>
  );
};
