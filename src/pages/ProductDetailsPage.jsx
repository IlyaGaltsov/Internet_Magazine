import ProductImages from '../components/pdp-images/ProductImages';
import ProductInfo from '../components/pdp-info/ProductInfo';
import './styles/ProductDetailsPage.css';

function ProductDetailsPage() {
  return (
    <div className="product-details">
      <ProductImages />
      <ProductInfo />
    </div>
  );
}

export default ProductDetailsPage;
