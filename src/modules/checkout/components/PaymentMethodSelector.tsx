'use client';

import { shopClient } from '@/lib/shop-api/shopClient';
import { Button } from '@heroui/button';
import { Radio, RadioGroup } from '@heroui/radio';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
}

interface PaymentMethodSelectorProps {
  selectedMethod?: string;
  onSelect: (methodId: string) => Promise<void>;
}

export function PaymentMethodSelector({ selectedMethod, onSelect }: PaymentMethodSelectorProps) {
  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('checkout.payment');

  useEffect(() => {
    loadPaymentMethods();
  }, []);

  const loadPaymentMethods = async () => {
    try {
      setIsLoading(true);
      const result = await shopClient.query({
        eligiblePaymentMethods: {
          id: true,
          name: true,
          description: true,
        },
      });

      setMethods(result.eligiblePaymentMethods);
      setError(null);
    } catch (err) {
      setError('Failed to load payment methods');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-default-500">{t('loading')}</div>;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  if (!methods.length) {
    return <div className="text-default-500">{t('noMethods')}</div>;
  }

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{t('selectMethod')}</h3>
      <RadioGroup value={selectedMethod} onValueChange={onSelect} className="space-y-4">
        {methods.map((method) => (
          <Radio
            key={method.id}
            value={method.id}
            description={method.description}
            className="p-4 border rounded-lg"
          >
            {method.name}
          </Radio>
        ))}
      </RadioGroup>

      <Button
        type="submit"
        color="primary"
        className="w-full mt-8"
        isDisabled={!selectedMethod}
        onPress={() => selectedMethod && onSelect(selectedMethod)}
      >
        {t('completeOrder')}
      </Button>
    </div>
  );
}
