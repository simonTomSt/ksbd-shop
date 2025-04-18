export const priceFormatter = (
  price: number,
  locale: string = 'pl-PL',
  currency: string = 'pln',
) => {
  const formattedPrice = price / 100;
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(formattedPrice);
};
