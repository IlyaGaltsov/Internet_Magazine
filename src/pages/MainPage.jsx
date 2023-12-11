import PropTypes from 'prop-types';

import Promo from '../components/promo/Promo';
import Brands from '../components/brands/Brands';
import Products from '../components/products/Products';
import Browse from '../components/browse/Browse';
import Reviews from '../components/reviews/Reviews';

import { useGetBrandsQuery } from '../slices/brandsApiSlice';
import { useGetFilteredProductsQuery } from '../slices/productsApiSlice';
import { useGetReviewsQuery } from '../slices/reviewsApiSlice';

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MainPage() {
  const { data: brands, isLoading: isLoadingBrands, error: errorBrands } = useGetBrandsQuery();

  const newProductsParams = { isNew: true };
  const topSellersParams = { isSale: true };

  const {
    data: productsNewArrival,
    isLoading: isLoadingNewArrival,
    error: errorNewArrival,
  } = useGetFilteredProductsQuery(newProductsParams);

  const {
    data: productsTopSellers,
    isLoading: isLoadingTopSellers,
    error: errorTopSellers,
  } = useGetFilteredProductsQuery(topSellersParams);

  const { data: reviews, isLoading: isLoadingReviews, error: errorReviews } = useGetReviewsQuery();

  return (
    <div>
      <Promo />

      <LoaderOrError isLoading={isLoadingBrands} error={errorBrands}>
        <Brands brands={brands?.length ? brands : []} theme="dark" />
      </LoaderOrError>

      <LoaderOrError isLoading={isLoadingNewArrival} error={errorNewArrival}>
        <Products
          title="New Arrivals"
          products={productsNewArrival?.length ? productsNewArrival.slice(0, 4) : []}
          link="/products?isNew=true"
        />
      </LoaderOrError>

      <LoaderOrError isLoading={isLoadingTopSellers} error={errorTopSellers}>
        <Products
          title="Top Sellers"
          products={
            productsTopSellers?.length ? shuffleArray([...productsTopSellers]).slice(0, 4) : []
          }
          link="/products"
        />
      </LoaderOrError>

      <Browse />

      <LoaderOrError isLoading={isLoadingReviews} error={errorReviews}>
        <Reviews reviews={reviews?.length ? reviews : []} />
      </LoaderOrError>
    </div>
  );
}

export default MainPage;

function LoaderOrError({ isLoading, error, children }) {
  if (isLoading) return <h2 className="container">Loading...</h2>;
  if (error) return <div className="container">{error.data.message || error.error}</div>;
  return children;
}

LoaderOrError.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string,
    }),
    error: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

LoaderOrError.defaultProps = {
  error: null,
};
