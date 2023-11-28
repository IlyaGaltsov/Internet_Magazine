import Promo from '../components/promo/Promo';
import Brands from '../components/brands/Brands';
import Products from '../components/products/Products';
import Browse from '../components/browse/Browse';
import Reviews from '../components/reviews/Reviews';
import { arrivalsProducts, productsTopSelling } from '../data/products';
import { reviews } from '../data/reviews';

function MainPage() {
  return (
    <div>
      <Promo />
      <Brands />
      <Products title="New arrivals" products={arrivalsProducts} />
      <Products title="Top selling" products={productsTopSelling} />
      <Browse />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default MainPage;
