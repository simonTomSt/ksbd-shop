'use client';

import { Button } from '@heroui/button';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { pathnames } from '@/lib/config/pathnames';
import { useRouter } from '@/lib/i18n/navigation';
import { PasswordInput } from '@/modules/common/PasswordInput';
import { UILink } from '@/modules/common/UILink';
import { addToast } from '@heroui/toast';
import { signIn } from '../api/signIn';
import { SignInFormValues, signInSchema } from '../schema/signInSchema';

export const SignInForm = () => {
  const t = useTranslations('auth.signIn');
  const tErrorCodes = useTranslations('errorCodes');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(signInSchema(t)),
  });
  const signInMutation = useMutation({
    mutationFn: (data: SignInFormValues) =>
      signIn({ username: data.email, password: data.password }),
    onSuccess: () => {
      router.push(pathnames.home.path);
    },
    onError: (error) => {
      addToast({
        title: tErrorCodes(error?.message as any),
        color: 'danger',
      });
    },
  });

  const onSubmit = (data: SignInFormValues) => {
    signInMutation.mutate(data);
  };

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationErrors={{
        email: errors.email?.message ?? '',
        password: errors.password?.message ?? '',
      }}
      onReset={() => reset({ email: '', password: '' })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4 w-full max-w-96">
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

        <Button
          className="w-full"
          color="primary"
          isLoading={signInMutation.isPending}
          type="submit"
        >
          {t('submit')}
        </Button>

        <div className="text-center text-xs text-foreground-600 mt-2 flex flex-col gap-2.5">
          <div>
            {t.rich('forgotPassword', {
              link: (chunks) => (
                <UILink href={pathnames.passwordReset.path} size="sm" underline="hover">
                  <span className="text-xs">{chunks}</span>
                </UILink>
              ),
            })}
          </div>

          <div>
            {t.rich('noAccount', {
              link: (chunks) => (
                <UILink href={pathnames.signUp.path} size="sm" underline="hover">
                  <span className="text-xs">{chunks}</span>
                </UILink>
              ),
            })}
          </div>
        </div>
      </div>
    </Form>
  );
};
