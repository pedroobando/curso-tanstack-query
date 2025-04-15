import { useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { ProductCard } from '../components/ProductCard';
import { useEffect } from 'react';

export const ProductbyId = () => {
  const { id } = useParams();
  const { product, isLoading } = useProduct({ id: id! });

  //INFO: This effect is used to scroll to the top of the page when the component is mounted or when the id changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold mb-2">Producto</h1>

      {isLoading && <p>Cargando...</p>}
      {product && <ProductCard product={product} fullDescrition={true} />}
    </div>
  );
};
