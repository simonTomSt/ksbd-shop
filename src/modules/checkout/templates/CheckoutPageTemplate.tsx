'use client';

import { Button } from '@heroui/button';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { CheckoutData, getCheckoutAction } from '../api/getCheckoutAction';
import {
  setBillingAddressAction,
  setPaymentMethodAction,
  setShippingAddressAction,
  setShippingMethodAction,
} from '../api/updateCheckoutAction';

import { pathnames } from '@/lib/config/pathnames';
import { CreateAddressInput } from '@/lib/shop-api/graphql';
import { AddressForm } from '../components/AddressForm';
import { PaymentMethodSelector } from '../components/PaymentMethodSelector';
import { ShippingMethodSelector } from '../components/ShippingMethodSelector';

type CheckoutStep = 'shipping' | 'billing' | 'payment';

export function CheckoutPageTemplate() {
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [checkoutData, setCheckoutData] = useState<CheckoutData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const t = useTranslations('checkout');

  useEffect(() => {
    loadCheckoutData();
  }, []);

  const loadCheckoutData = async () => {
    try {
      setIsLoading(true);
      const data = await getCheckoutAction();
      setCheckoutData(data);
      setError(null);
    } catch (err) {
      setError('Failed to load checkout data');
      router.push(pathnames.cart.path);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShippingAddressSubmit = async (address: CreateAddressInput) => {
    try {
      await setShippingAddressAction(address);
      setStep('billing');
    } catch (err) {
      setError('Failed to update shipping address');
    }
  };

  const handleBillingAddressSubmit = async (address: CreateAddressInput) => {
    try {
      await setBillingAddressAction(address);
      setStep('payment');
    } catch (err) {
      setError('Failed to update billing address');
    }
  };

  const handleShippingMethodSubmit = async (shippingMethodId: string) => {
    try {
      await setShippingMethodAction([shippingMethodId]);
      await loadCheckoutData();
    } catch (err) {
      setError('Failed to update shipping method');
    }
  };

  const handlePaymentMethodSubmit = async (paymentMethodId: string) => {
    try {
      await setPaymentMethodAction(paymentMethodId);
      // Handle successful payment setup
      router.push(pathnames.orderConfirmation.path);
    } catch (err) {
      setError('Failed to set payment method');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-default-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">{t('title')}</h1>

        <div className="flex gap-4 mb-8">
          <Button
            color={step === 'shipping' ? 'primary' : 'default'}
            variant={step === 'shipping' ? 'solid' : 'light'}
            onPress={() => setStep('shipping')}
          >
            {t('shippingStep')}
          </Button>
          <Button
            color={step === 'billing' ? 'primary' : 'default'}
            variant={step === 'billing' ? 'solid' : 'light'}
            onPress={() => setStep('billing')}
            isDisabled={!checkoutData?.shippingAddress}
          >
            {t('billingStep')}
          </Button>
          <Button
            color={step === 'payment' ? 'primary' : 'default'}
            variant={step === 'payment' ? 'solid' : 'light'}
            onPress={() => setStep('payment')}
            isDisabled={!checkoutData?.billingAddress}
          >
            {t('paymentStep')}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">
              {step === 'shipping' && t('shippingAddress')}
              {step === 'billing' && t('billingAddress')}
              {step === 'payment' && t('paymentMethod')}
            </h2>
          </CardHeader>
          <CardBody>
            {step === 'shipping' && (
              <>
                <AddressForm
                  initialData={checkoutData?.shippingAddress}
                  onSubmit={handleShippingAddressSubmit}
                />
                <ShippingMethodSelector
                  selectedMethod={checkoutData?.shippingLines[0]?.shippingMethod.id}
                  onSelect={handleShippingMethodSubmit}
                />
              </>
            )}

            {step === 'billing' && (
              <AddressForm
                initialData={checkoutData?.billingAddress}
                onSubmit={handleBillingAddressSubmit}
              />
            )}

            {step === 'payment' && (
              <PaymentMethodSelector
                selectedMethod={checkoutData?.paymentLines[0]?.paymentMethod.id}
                onSelect={handlePaymentMethodSubmit}
              />
            )}
          </CardBody>
        </Card>

        {checkoutData && (
          <Card className="mt-4">
            <CardHeader>
              <h2 className="text-xl font-semibold">{t('orderSummary')}</h2>
            </CardHeader>
            <CardBody>
              <div className="flex justify-between text-lg font-medium">
                <span>{t('total')}</span>
                <span>{checkoutData.total.toFixed(2)} zł</span>
              </div>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
}
