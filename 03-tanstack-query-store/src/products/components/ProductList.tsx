import { FC } from 'react';
import { type IProduct, ProductCard, usePrefProduct } from '..';
import { Link } from 'react-router-dom';

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  const prefProduct = usePrefProduct();

  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`} onMouseEnter={() => prefProduct(+product.id)}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
};
