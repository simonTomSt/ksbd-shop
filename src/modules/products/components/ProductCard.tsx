import { Card, CardBody, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import NextImage from 'next/image';

type ProductCardProps = {
  product: SearchProduct;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, featuredAsset } = product;
  const price = variants[0].price;
  return (
    <Card isPressable shadow="sm">
      <CardBody className="overflow-visible p-0">
        <Image
          as={NextImage}
          alt={name}
          className="w-full object-cover h-[140px]"
          radius="lg"
          shadow="sm"
          src={featuredAsset?.source}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{name}</b>
        <p className="text-default-500">{price}</p>
      </CardFooter>
    </Card>
  );
};
