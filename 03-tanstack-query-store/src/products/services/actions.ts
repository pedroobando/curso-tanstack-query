import { type IProduct, productsApi } from '..';

interface GetProductsOptions {
  filterKey?: string;
}

export const sleep = (ms: number): Promise<boolean> => {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms * 1000));
};

export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<IProduct[]> => {
  //INFO: Simulate a delay of 2 seconds
  // await sleep(2);

  const filterUrl: string = filterKey ? `?category=${filterKey}` : '';

  const { data } = await productsApi.get<IProduct[]>(`/products${filterUrl}`);
  return data;
};

export const getProductById = async (id: string): Promise<IProduct> => {
  //INFO: Simulate a delay of 2 seconds
  // await sleep(2);

  const { data } = await productsApi.get<IProduct>(`/products/${id}`);
  return data;
};

interface LikeProduct {
  id?: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const createProduct = async (product: LikeProduct): Promise<IProduct> => {
  // await sleep(2);

  const { data } = await productsApi.post<IProduct>(`/products`, product);
  return data;
};
