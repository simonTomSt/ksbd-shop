import { getCurrentUser } from '@/lib/auth/auth';

export default async function AccountPageLayout({
  dashboard,
  auth,
}: {
  dashboard: React.ReactNode;
  auth: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return <div>{currentUser ? dashboard : auth}</div>;
}
