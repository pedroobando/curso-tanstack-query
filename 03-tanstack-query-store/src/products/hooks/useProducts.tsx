import { useQuery } from '@tanstack/react-query';
import { ProductsActions } from '..';

interface ProductOptions {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: ProductOptions) => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ['products', { filterKey }],
    queryFn: () => ProductsActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { products, isLoading, isError, error, isFetching };
};
