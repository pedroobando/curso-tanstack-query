import { useQuery } from '@tanstack/react-query';
import { ProductsActions } from '..';

interface ProductOptions {
  id: number;
}

export const useProduct = ({ id = 0 }: ProductOptions) => {
  const {
    data: product,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductsActions.getProductById(id),
    staleTime: 1000 * 60 * 60 * 2, // 2 minutes
  });

  return { product, isLoading, isError, error, isFetching };
};
