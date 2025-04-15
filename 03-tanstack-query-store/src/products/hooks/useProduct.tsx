import { useQuery } from '@tanstack/react-query';
import { ProductsActions } from '..';

interface ProductOptions {
  id: string;
}

export const useProduct = ({ id = '' }: ProductOptions) => {
  const {
    data: product,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => ProductsActions.getProductById(id),
    staleTime: 1000 * 60 * 60 * 1, // 2 minutes
  });

  return { product, isLoading, isError, error, isFetching };
};
