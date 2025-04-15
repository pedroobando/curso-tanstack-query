import { type IProduct, productsApi } from '..';

interface GetProductsOptions {
  filterKey?: string;
}

const sleep = (ms: number): Promise<boolean> => {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms * 1000));
};

export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<IProduct[]> => {
  //INFO: Simulate a delay of 2 seconds
  await sleep(2);

  const filterUrl: string = filterKey ? `?category=${filterKey}` : '';

  const { data } = await productsApi.get<IProduct[]>(`/products${filterUrl}`);
  return data;
};

export const getProductById = async (id: number): Promise<IProduct> => {
  //INFO: Simulate a delay of 2 seconds
  await sleep(2);

  const { data } = await productsApi.get<IProduct>(`/products/${id}`);
  return data;
};
