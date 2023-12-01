import { useParams } from 'react-router-dom';
import ProductImages from '../components/pdp-images/ProductImages';
import ProductInfo from '../components/pdp-info/ProductInfo';
import { products } from '../data/products';
import './styles/ProductDetailsPage.css';

function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id, 10));

  return (
    <div className="product-details">
      <ProductImages productImages={product.images} />
      <ProductInfo productData={product} />
    </div>
  );
}

export default ProductDetailsPage;
