'use server';

import { cookies } from 'next/headers';

export const toggleProductsListType = async () => {
  const cookieStore = await cookies();
  const currentListType = cookieStore.get('_ksbd_products_list_type')?.value ?? 'grid';

  cookieStore.set('_ksbd_products_list_type', currentListType === 'grid' ? 'list' : 'grid');
};
