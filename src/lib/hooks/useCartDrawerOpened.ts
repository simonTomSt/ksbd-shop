import { parseAsBoolean, useQueryState } from 'nuqs';

export const useCartDrawerOpened = () => {
  return useQueryState('cart', parseAsBoolean.withDefault(false));
};
