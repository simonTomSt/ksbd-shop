'use client';

import { priceFormatter } from '@/lib/utils/priceFormatter';
import { cn } from '@heroui/theme';
import { useLocale } from 'next-intl';

type AmountProps = {
  withTax?: boolean;
  value: number;
  className?: string;
};

export const Amount = ({ value, className, withTax = true }: AmountProps) => {
  const currency = 'PLN';
  const locale = useLocale();

  return (
    <span className={cn(className)}>
      <span>{priceFormatter(value, locale, currency)}</span>
      {withTax && <span className="ml-1.5 text-sm text-foreground-500">{'(brutto)'}</span>}
    </span>
  );
};
