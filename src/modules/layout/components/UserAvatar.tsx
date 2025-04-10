import { pathnames } from '@/lib/config/pathnames';
import { useRouter } from '@/lib/i18n/navigation';
import { signOut } from '@/modules/auth/api/signOut';
import { PureLink } from '@/modules/common/PureLink';
import { UILink } from '@/modules/common/UILink';
import { useAuth } from '@/modules/providers/AuthProvider';
import { UserIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { addToast } from '@heroui/toast';
import { User } from '@heroui/user';
import { useMutation } from '@tanstack/react-query';

export const UserAvatar = () => {
  const { currentCustomer } = useAuth();
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      router.push(pathnames.home.path);
      addToast({
        title: 'Wylogowano',
        description: 'Zostałeś wylogowany z konta',
        color: 'success',
      });
    },
  });

  if (currentCustomer)
    return (
      <>
        <User
          avatarProps={{
            fallback: <UserIcon className="w-6 h-6" />,
            classNames: {
              base: 'bg-transparent',
            },
          }}
          description={
            <Dropdown>
              <DropdownTrigger>
                <button className="font-medium text-small text-primary">Moje konto</button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="account" as={PureLink} href={pathnames.account.path}>
                  Panel klienta
                </DropdownItem>
                <DropdownItem
                  key="signOut"
                  className="text-danger"
                  color="danger"
                  onPress={() => signOutMutation.mutate()}
                >
                  Wyloguj się
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          }
          name={
            <span className="text-foreground-600">
              Witaj, <span className="font-bold text-foreground">{currentCustomer.firstName}</span>
            </span>
          }
        />
      </>
    );

  return (
    <User
      avatarProps={{
        fallback: <UserIcon className="w-6 h-6" />,
        classNames: {
          base: 'bg-transparent',
        },
      }}
      description={
        <UILink href={pathnames.signIn.path} size="sm">
          <span className="font-medium">Zaloguj się</span>
        </UILink>
      }
      name="Panel klienta"
    />
  );
};

export const UserAvatarMobile = () => {
  const { currentCustomer } = useAuth();
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      router.push(pathnames.home.path);
      addToast({
        title: 'Wylogowano',
        description: 'Zostałeś wylogowany z konta',
        color: 'success',
        timeout: 2000,
      });
    },
  });

  if (currentCustomer)
    return (
      <>
        <Dropdown>
          <DropdownTrigger>
            <Button
              isIconOnly
              aria-label="shopping cart"
              className="md:hidden"
              size="lg"
              variant="light"
            >
              <UserIcon className="w-6 h-6" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="account" as={PureLink} href={pathnames.account.path}>
              Panel klienta
            </DropdownItem>
            <DropdownItem
              key="signOut"
              className="text-danger"
              color="danger"
              onPress={() => signOutMutation.mutate()}
            >
              Wyloguj się
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </>
    );

  return (
    <Button
      isIconOnly
      aria-label="shopping cart"
      as={UILink}
      className="md:hidden"
      href={pathnames.signIn.path}
      size="lg"
      variant="light"
    >
      <UserIcon className="w-6 h-6" />
    </Button>
  );
};
