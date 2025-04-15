export { productsApi } from './apis/productsApi';

export { ProductCard } from './components/ProductCard';
export { ProductList } from './components/ProductList';

export { StoreLayout } from './layout/StoreLayout';
export type { IProduct } from './interfaces/products';

export { CompleteListPage } from './pages/CompleteListPage';
export { MensPage } from './pages/MensPage';
export { NewProduct } from './pages/NewProduct';
export { WomensPage } from './pages/WomensPage';
export { ProductbyId } from './pages/ProductById';

export * as ProductsActions from './services/actions';
export { useProducts } from './hooks/useProducts';
export { usePrefProduct } from './hooks/usePrefProduct';
export { useProduct } from './hooks/useProduct';
export { useProductMutation } from './hooks/useProductMutation';
