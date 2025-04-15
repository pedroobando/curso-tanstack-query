import { FC } from 'react';
import { ProductList, useProducts } from '..';

interface Props {
  category?: string;
}

export const CompleteListPage: FC<Props> = ({ category = '' }) => {
  const { products, isLoading, isError } = useProducts({ filterKey: category });
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {isLoading && <p>Cargando...</p>}
      {isError && <p>Hubo un error al cargar los productos</p>}

      <ProductList products={products!} />
    </div>
  );
};
