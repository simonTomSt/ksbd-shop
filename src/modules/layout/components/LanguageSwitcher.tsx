'use client';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { LanguageIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { Locale, useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const query = useParams();

  const onSelectChange = (nextLocale: Locale) =>
    router.replace({ pathname, query }, { locale: nextLocale });

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="flat"
          color="default"
          className="bg-zinc-800 p-3 rounded-md text-white max-w-max ml-auto"
        >
          <LanguageIcon className="w-4 h-4" />
          <span>{t(locale === 'pl' ? 'languages.pl' : 'languages.en')}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language Select">
        <DropdownItem key="pl" onPress={() => onSelectChange('pl')}>
          {t('languages.pl')}
        </DropdownItem>
        <DropdownItem key="en" onPress={() => onSelectChange('en')}>
          {t('languages.en')}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
