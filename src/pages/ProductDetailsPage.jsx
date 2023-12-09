import { useParams } from 'react-router-dom';
import ProductImages from '../components/pdp-images/ProductImages';
import ProductInfo from '../components/pdp-info/ProductInfo';
import ProductTabs from '../components/pdp-tabs-section/ProductTabs';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';

import './styles/ProductDetailsPage.css';

function ProductDetailsPage() {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading: isLoadingProduct,
    error: errorProduct,
  } = useGetProductDetailsQuery(productId);

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
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
