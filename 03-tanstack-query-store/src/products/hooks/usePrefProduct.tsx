import { useQueryClient } from '@tanstack/react-query';
import { ProductsActions } from '..';

export const usePrefProduct = () => {
  const queryClient = useQueryClient();

  const prefecthProduct = (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ['product', id],
      queryFn: () => ProductsActions.getProductById(id),
      staleTime: 1000 * 60 * 60 * 2, // 2 minutos
    });
  };
  return prefecthProduct;
};
