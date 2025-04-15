import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IProduct, ProductsActions } from '..';

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: ProductsActions.createProduct,
    onSuccess: (product) => {
      // COMMENT: Cuando se invalida el query, este se borra del cache y cuando se regresa a la pagina, esta la recrea de nuevo
      // recomendable para lista peque~nas.
      // queryClient.invalidateQueries({
      //   queryKey: ['products', { filterKey: product.category }],
      // });

      queryClient.setQueryData<IProduct[]>(['products', { filterKey: product.category }], (old) => {
        if (!old) return [product];
        return [...old, product];
      });
    },
    // onSettled: () => {
    //   console.log('Producto Creado - Settled');
    // },
  });

  return productMutation;
};
