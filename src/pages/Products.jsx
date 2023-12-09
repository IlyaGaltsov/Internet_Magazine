import { useSearchParams } from 'react-router-dom';
import Products from '../components/products/Products';
import {
  useGetNewArrivalsQuery,
  useGetOnSalesQuery,
  useGetProductsQuery,
} from '../slices/productsApiSlice';

function ProductsPage() {
  const [searchParams] = useSearchParams();

  const isSale = searchParams.get('isSale');
  const isNew = searchParams.get('isNew');

  const {
    data: productsIsSale,
    isLoading: isLoadingIsSale,
    error: errorIsSale,
  } = useGetOnSalesQuery(undefined, { skip: isNew });

  const {
    data: productsNewArrival,
    isLoading: isLoadingNewArrival,
    error: errorNewArrival,
  } = useGetNewArrivalsQuery(undefined, { skip: isSale });

  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
  } = useGetProductsQuery(undefined, { skip: isNew || isSale });

  const getContentAndTitle = () => {
    if (isLoadingIsSale || isLoadingNewArrival || isLoadingProducts) {
      return { content: <div>Loading...</div>, title: '' };
    }

    if (errorIsSale || errorNewArrival || errorProducts) {
      return { content: <div>Error</div>, title: '' };
    }

    if (isSale) {
      return { content: productsIsSale, title: 'On Sales' };
    }

    if (isNew) {
      return { content: productsNewArrival, title: 'New Arrivals' };
    }

    return { content: products, title: 'Products' };
  };

  const { content, title } = getContentAndTitle();

  return (
    <section>
      <Products title={title} products={content?.length ? content : []} />
    </section>
  );
}

export default ProductsPage;
