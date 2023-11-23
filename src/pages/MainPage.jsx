import Promo from '../components/promo/Promo';
import Brands from '../components/brands/Brands';
import Products from '../components/products/Products';
import Browse from '../components/browse/Browse';
import { arrivalsProducts, productsTopSelling } from '../data/products';

function MainPage() {
  return (
    <div>
      <Promo />
      <Brands />
      <Products title="New arrivals" products={arrivalsProducts} />
      <Products title="Top selling" products={productsTopSelling} />
      <Browse />
    </div>
  );
}

export default MainPage;
