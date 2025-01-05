import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types';
import React from 'react';
import { Button } from './ui/button';
interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;
  return (
    <div>
      <Button
      disabled={isOutOfStock}
        className={cn(
          'w-full bg-transparent text-darkColor shadow-none border border-darkColor/30 font-semibold tracking-wide hover:bg-darkColor hover:text-white hoverEffect ',
          className
        )}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
