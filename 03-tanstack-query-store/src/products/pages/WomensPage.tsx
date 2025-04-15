import { ProductList, useProducts } from '..';

export const WomensPage = () => {
  const { products, isLoading, isError } = useProducts({ filterKey: "women's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {isLoading && <p>Cargando...</p>}
      {isError && <p>Hubo un error al cargar los productos</p>}

      <ProductList products={products!} />
    </div>
  );
};
