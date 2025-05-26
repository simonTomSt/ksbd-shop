'use client';
import { Card } from '@heroui/card';
import { Input } from '@heroui/input';

export const ProductsFiltersSidebar = () => {
  return (
    <Card as="aside" className="flex flex-col gap-5 p-4">
      {/* Name */}
      <Input name="name" label="Nazwa:" labelPlacement="outside" placeholder="Nazwa produktu" />

      {/* Price */}
      <div className="flex items-center gap-3">
        <Input
          type="number"
          name="priceFrom"
          label="Cena (zł):"
          labelPlacement="outside"
          placeholder="od"
          min={0}
        />
        <span className="pt-5">-</span>
        <Input
          type="number"
          name="priceTo"
          placeholder="do"
          label=" "
          labelPlacement="outside"
          min={0}
        />
      </div>
    </Card>
  );
};
