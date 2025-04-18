'use client';

import { priceFormatter } from '@/lib/utils/priceFormatter';
import { cn } from '@heroui/theme';
import { useLocale } from 'next-intl';

type AmountProps = {
  withTax?: boolean;
  amount: number;
  className?: string;
};

export const Amount = ({ amount, className, withTax = true }: AmountProps) => {
  const locale = useLocale();

  return (
    <span className={cn(className)}>
      <span>{priceFormatter(amount, locale)}</span>
      {withTax && <span className="ml-1.5 text-sm text-foreground-500">{'(brutto)'}</span>}
    </span>
  );
};
