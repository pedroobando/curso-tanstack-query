import { useQueryClient } from '@tanstack/react-query';
import { ProductsActions } from '..';

export const usePrefProduct = () => {
  const queryClient = useQueryClient();

  const prefecthProduct = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ['product', id.toString()],
      queryFn: () => ProductsActions.getProductById(id),
      staleTime: 1000 * 60 * 60 * 2, // 2 minutos
    });
  };
  return prefecthProduct;
};
