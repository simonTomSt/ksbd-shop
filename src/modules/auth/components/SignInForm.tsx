'use client';

import { Button } from '@heroui/button';
import { Checkbox } from '@heroui/checkbox';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { SignUpFormValues, signUpSchema } from '../schema/signUpSchema';

import { signUp } from '@/lib/auth';
import { pathnames } from '@/lib/config/pathnames';
import { PasswordInput } from '@/modules/common/PasswordInput';
import { UILink } from '@/modules/common/UILink';

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  newsletter: false,
  optIn: false,
  privacyPolicyAgreement: false,
};

export const SignInForm = () => {
  const t = useTranslations('auth.signUp');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SignUpFormValues>({
    defaultValues,
    resolver: zodResolver(signUpSchema(t)),
    mode: 'onChange',
  });
  const signUpMutation = useMutation({
    mutationFn: (data: SignUpFormValues) => signUp(data),
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log('data', data);
    signUpMutation.mutate(data);
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationErrors={{
        email: errors.email?.message ?? '',
      }}
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          isRequired
          errorMessage={errors.firstName?.message}
          label={t('firstName.label')}
          labelPlacement="outside"
          placeholder={t('firstName.placeholder')}
          {...register('firstName')}
        />

        <Input
          isRequired
          errorMessage={errors.lastName?.message}
          label={t('lastName.label')}
          labelPlacement="outside"
          placeholder={t('lastName.placeholder')}
          {...register('lastName')}
        />

        <Input
          isRequired
          errorMessage={errors.email?.message}
          label={t('email.label')}
          labelPlacement="outside"
          placeholder={t('email.placeholder')}
          type="email"
          {...register('email')}
        />

        <PasswordInput
          isRequired
          errorMessage={errors.password?.message}
          label={t('password.label')}
          labelPlacement="outside"
          placeholder={t('password.placeholder')}
          {...register('password')}
        />

        <div className="flex gap-1">
          <Checkbox
            isRequired
            isInvalid={!!errors.privacyPolicyAgreement?.message}
            {...register('privacyPolicyAgreement')}
          />
          <label className="text-xs" htmlFor="privacyPolicyAgreement">
            {t.rich('privacyPolicyAgreement.label', {
              link: (chunks) => (
                <UILink href={pathnames.privacyPolicy.path} size="sm" underline="always">
                  {chunks}
                </UILink>
              ),
            })}
          </label>
        </div>
        {/* <PrivacyPolicyCheckbox
          isRequired
          isInvalid={!!errors.privacyPolicyAgreement?.message}
          {...register('privacyPolicyAgreement')}
        >
          <span className="text-xs">
            {t.rich('privacyPolicyAgreement.label', {
              link: (chunks) => (
                <UILink href="/privacy-policy" size="sm" underline="always">
                  {chunks}
                </UILink>
              ),
            })}
          </span>
        </PrivacyPolicyCheckbox> */}

        <Checkbox isRequired isInvalid={!!errors.newsletter?.message} {...register('newsletter')}>
          <span className="text-xs">{t('newsletter.label')}</span>
        </Checkbox>

        <Checkbox isRequired isInvalid={!!errors.optIn?.message} {...register('optIn')}>
          <span className="text-xs">{t('optIn.label')}</span>
        </Checkbox>

        <Button
          className="w-full"
          color={isValid ? 'primary' : 'default'}
          disabled={!isValid}
          isLoading={signUpMutation.isPending}
          type="submit"
        >
          {t('submit')}
        </Button>

        <div className="text-center text-sm mt-2">
          {t.rich('alreadyHaveAccount', {
            link: (chunks) => (
              <UILink href={pathnames.signIn.path} size="sm" underline="hover">
                {chunks}
              </UILink>
            ),
          })}
        </div>
      </div>
    </Form>
  );
};
