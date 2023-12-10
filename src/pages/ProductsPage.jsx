import { useSearchParams } from 'react-router-dom';
import Products from '../components/products/Products';
import {
  useGetNewArrivalsQuery,
  useGetOnSalesQuery,
  useGetBrandProductsQuery,
  useGetProductsQuery,
} from '../slices/productsApiSlice';

function ProductsPage() {
  const [searchParams] = useSearchParams();

  const isSale = searchParams.get('isSale');
  const isNew = searchParams.get('isNew');
  const brand = searchParams.get('brand');

  const {
    data: productsIsSale,
    isLoading: isLoadingIsSale,
    error: errorIsSale,
  } = useGetOnSalesQuery(undefined, { skip: isNew || brand });

  const {
    data: productsNewArrival,
    isLoading: isLoadingNewArrival,
    error: errorNewArrival,
  } = useGetNewArrivalsQuery(undefined, { skip: isSale || brand });

  const {
    data: productsIsBrand,
    isLoading: isLoadingIsBrand,
    error: errorIsBrand,
  } = useGetBrandProductsQuery(brand, { skip: isNew || isSale });

  const {
    data: products,
    isLoading: isLoadingProducts,
    error: errorProducts,
  } = useGetProductsQuery(undefined, { skip: isNew || isSale || brand });

  const getContentAndTitle = () => {
    if (isLoadingIsSale || isLoadingNewArrival || isLoadingProducts || isLoadingIsBrand) {
      return { content: <div>Loading...</div>, title: '' };
    }

    if (errorIsSale || errorNewArrival || errorProducts || errorIsBrand) {
      return { content: <div>Error</div>, title: '' };
    }

    if (isSale) {
      return { content: productsIsSale, title: 'On Sales' };
    }

    if (isNew) {
      return { content: productsNewArrival, title: 'New Arrivals' };
    }

    if (brand) {
      const formattedTitle = brand.replace(/_/g, ' ');
      return { content: productsIsBrand, title: formattedTitle };
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
