import Promo from '../components/promo/Promo';
import Brands from '../components/brands/Brands';
import Products from '../components/products/Products';
import Browse from '../components/browse/Browse';
import Reviews from '../components/reviews/Reviews';
import { products } from '../data/products';
import { reviews } from '../data/reviews';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MainPage() {
  const arrivalsProducts = products.filter((product) => product.isNew);
  const productsTopSelling = shuffleArray([...products]).slice(0, 4);

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
