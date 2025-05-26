'use client';

import { shopClient } from '@/lib/shop-api/shopClient';
import { Radio, RadioGroup } from '@heroui/radio';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ShippingMethodSelectorProps {
  selectedMethod?: string;
  onSelect: (methodId: string) => Promise<void>;
}

export function ShippingMethodSelector({ selectedMethod, onSelect }: ShippingMethodSelectorProps) {
  const [methods, setMethods] = useState<ShippingMethod[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('checkout.shipping');

  useEffect(() => {
    loadShippingMethods();
  }, []);

  const loadShippingMethods = async () => {
    try {
      setIsLoading(true);
      const result = await shopClient.query({
        eligibleShippingMethods: {
          id: true,
          name: true,
          description: true,
          price: true,
        },
      });

      setMethods(result.eligibleShippingMethods);
      setError(null);
    } catch (err) {
      setError('Failed to load shipping methods');
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
    <div className="mt-8">
      <h3 className="text-lg font-medium mb-4">{t('selectMethod')}</h3>
      <RadioGroup value={selectedMethod} onValueChange={onSelect} className="space-y-4">
        {methods.map((method) => (
          <Radio
            key={method.id}
            value={method.id}
            description={method.description}
            className="p-4 border rounded-lg"
          >
            <div className="flex justify-between items-center">
              <span>{method.name}</span>
              <span className="font-medium">{method.price.toFixed(2)} zł</span>
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}
