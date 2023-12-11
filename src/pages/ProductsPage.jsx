import { useSearchParams } from 'react-router-dom';
import Products from '../components/products/Products';
import { useGetFilteredProductsQuery } from '../slices/productsApiSlice';

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const filterParams = {};

  // http://localhost:3000/products?isSale=true&brands=gucci&brands=prada&brands=zara
  // Преобразовываем параметры из URL в объект
  searchParams.forEach((value, key) => {
    if (!filterParams[key]) {
      filterParams[key] = new Set();
    }
    filterParams[key].add(value);
  });

  // Преобразуем объект параметров обратно в строку запроса для передачи в сам запрос
  const queryString = Object.entries(filterParams)
    .reduce((acc, [key, values]) => {
      values.forEach((value) => {
        acc.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      });
      return acc;
    }, [])
    .join('&');

  const { data: products, isLoading, error } = useGetFilteredProductsQuery(queryString);

  const getTitle = () => {
    const brand = filterParams.brand ? [...filterParams.brand][0] : null;
    const isSale = filterParams.isSale ? [...filterParams.isSale][0] : null;
    const isNew = filterParams.isNew ? [...filterParams.isNew][0] : null;

    if (brand) {
      return brand.replace(/_/g, ' ');
    }
    if (isSale === 'true') {
      return 'On Sales';
    }
    if (isNew === 'true') {
      return 'New Arrivals';
    }
    return 'Products';
  };

  const title = getTitle();

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }
  if (error) {
    return <div className="container">Error</div>;
  }
  return (
    <section>
      <Products title={title} products={products?.length ? products : []} />
    </section>
  );
}

export default ProductsPage;
