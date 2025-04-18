import { ProductList, useProducts } from '..';

export const MensPage = () => {
  const { products, isLoading, isError } = useProducts({ filterKey: "men's clothing" });
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {isLoading && <p>Cargando...</p>}
      {isError && <p>Hubo un error al cargar los productos</p>}

      <ProductList products={products!} />
    </div>
  );
};
