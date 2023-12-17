import { useParams } from 'react-router-dom';
import ProductImages from '../components/pdp-images/ProductImages';
import ProductInfo from '../components/pdp-info/ProductInfo';
import ProductTabs from '../components/pdp-tabs-section/ProductTabs';
import Products from '../components/products/Products';
import { shuffleArray } from './MainPage';
import { useGetProductDetailsQuery, useGetTopSelleresQuery } from '../slices/productsApiSlice';

import './styles/ProductDetailsPage.scss';

function ProductDetailsPage() {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading: isLoadingProduct,
    error: errorProduct,
  } = useGetProductDetailsQuery(productId);

  const { data: productsTopSellers } = useGetTopSelleresQuery();

  return (
    <div className="container">
      {isLoadingProduct ? (
        <h2>Loading...</h2>
      ) : errorProduct ? (
        <div>{errorProduct.data.message || errorProduct.error}</div>
      ) : (
        <div className="product-details-page">
          <div className="product-info-details">
            <ProductImages productImages={product.images} />
            <ProductInfo productData={product} />
          </div>
          <ProductTabs productData={product} />
          <Products
            title="You might also like"
            products={
              productsTopSellers?.length ? shuffleArray([...productsTopSellers]).slice(0, 4) : []
            }
          />
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
