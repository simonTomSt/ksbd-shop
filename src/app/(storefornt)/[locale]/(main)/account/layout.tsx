export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  // const currentUser = await getCurrentUser();
  // const locale = await getLocale()

  // if (!false) {
  //   redirect({
  //     href: pathnames.signIn.path,
  //     locale: locale,
  //   })
  // }

  return children;
}
