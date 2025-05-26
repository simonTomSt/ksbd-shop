'use client';

import { CreateAddressInput } from '@/lib/shop-api/graphql';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

interface AddressFormProps {
  initialData?: CreateAddressInput | null;
  onSubmit: (data: CreateAddressInput) => Promise<void>;
}

export function AddressForm({ initialData, onSubmit }: AddressFormProps) {
  const t = useTranslations('checkout.address');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateAddressInput>({
    defaultValues: initialData || {
      fullName: '',
      streetLine1: '',
      streetLine2: '',
      city: '',
      province: '',
      postalCode: '',
      countryCode: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label={t('fullName')}
        {...register('fullName', { required: t('required') })}
        errorMessage={errors.fullName?.message}
      />

      <Input
        label={t('streetLine1')}
        {...register('streetLine1', { required: t('required') })}
        errorMessage={errors.streetLine1?.message}
      />

      <Input
        label={t('streetLine2')}
        {...register('streetLine2')}
        errorMessage={errors.streetLine2?.message}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label={t('city')}
          {...register('city', { required: t('required') })}
          errorMessage={errors.city?.message}
        />

        <Input
          label={t('province')}
          {...register('province', { required: t('required') })}
          errorMessage={errors.province?.message}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label={t('postalCode')}
          {...register('postalCode', { required: t('required') })}
          errorMessage={errors.postalCode?.message}
        />

        <Input
          label={t('country')}
          {...register('countryCode', { required: t('required') })}
          errorMessage={errors.countryCode?.message}
        />
      </div>

      <Button type="submit" color="primary" isLoading={isSubmitting} className="w-full">
        {t('continue')}
      </Button>
    </form>
  );
}
