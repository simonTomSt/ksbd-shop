import { getCurrentCustomer } from '@/modules/auth/api/getCurrentCustomer';
import { cookies } from 'next/headers';

export const getWishlist = async () => {
  const [cookieStore, currentCustomer] = await Promise.all([cookies(), getCurrentCustomer()]);
  const wishlistCookie = cookieStore.get('_ksbd_whishlist');

  if (!wishlistCookie?.value) {
    return [];
  }

  const wishlistData = JSON.parse(wishlistCookie.value);

  return wishlistData[currentCustomer?.id ?? 'unknown'] || [];
};
