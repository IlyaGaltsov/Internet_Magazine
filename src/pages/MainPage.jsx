import PropTypes from 'prop-types';

import Promo from '../components/promo/Promo';
import Brands from '../components/brands/Brands';
import Products from '../components/products/Products';
import Browse from '../components/browse/Browse';
import Reviews from '../components/reviews/Reviews';

import { useGetBrandsQuery } from '../slices/brandsApiSlice';
import { useGetNewArrivalsQuery, useGetTopSelleresQuery } from '../slices/productsApiSlice';
import { useGetReviewsQuery } from '../slices/reviewsApiSlice';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MainPage() {
  const { data: brands, isLoading: isLoadingBrands, error: errorBrands } = useGetBrandsQuery();

  const {
    data: productsNewArrival,
    isLoading: isLoadingNewArrival,
    error: errorNewArrival,
  } = useGetNewArrivalsQuery();

  const {
    data: productsTopSellers,
    isLoading: isLoadingTopSellers,
    error: errorTopSellers,
  } = useGetTopSelleresQuery();

  const { data: reviews, isLoading: isLoadingReviews, error: errorReviews } = useGetReviewsQuery();

  return (
    <div>
      <Promo />
      <BrandsRender
        isLoading={isLoadingBrands}
        error={errorBrands}
        brands={brands?.length ? brands : []}
      />
      <ProductsRender
        isLoading={isLoadingNewArrival}
        error={errorNewArrival}
        products={productsNewArrival?.length ? productsNewArrival.slice(0, 4) : []}
        title="New arrival"
        link="/products?isNew=true"
      />
      <ProductsRender
        isLoading={isLoadingTopSellers}
        error={errorTopSellers}
        products={
          productsTopSellers?.length ? shuffleArray([...productsTopSellers]).slice(0, 4) : []
        }
        title="Top selling"
        link="/products"
      />
      <Browse />
      <ReviewsRender
        isLoading={isLoadingReviews}
        error={errorReviews}
        reviews={reviews?.length ? reviews : []}
      />
    </div>
  );
}

export default MainPage;

function BrandsRender({ isLoading, error, brands }) {
  if (isLoading) return <h2 className="container">Loading...</h2>;
  if (error) return <div className="container">{error.data.message || error.error}</div>;
  return <Brands brands={brands} theme="dark" />;
}

function ProductsRender({ isLoading, error, products, title, link }) {
  if (isLoading) return <h2 className="container">Loading...</h2>;
  if (error) return <div className="container">{error && (error.data.message || error.error)}</div>;
  return <Products title={title} products={products} link={link} />;
}

function ReviewsRender({ isLoading, error, reviews }) {
  if (isLoading) return <h2 className="container">Loading...</h2>;
  if (error) return <div className="container">{error.data.message || error.error}</div>;
  return <Reviews reviews={reviews} />;
}

BrandsRender.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string,
    }),
    error: PropTypes.string,
  }),
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      brandname: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

BrandsRender.defaultProps = {
  error: null,
};

ProductsRender.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string,
    }),
    error: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      thumb: PropTypes.string,
      price: PropTypes.number.isRequired,
      discountedPrice: PropTypes.number,
      discount: PropTypes.number,
      rating: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
      colors: PropTypes.arrayOf(PropTypes.string),
      sizes: PropTypes.arrayOf(PropTypes.string),
      count: PropTypes.number,
      isNew: PropTypes.bool,
      isSale: PropTypes.bool,
    }),
  ).isRequired,
};

ProductsRender.defaultProps = {
  error: null,
};

ReviewsRender.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string,
    }),
    error: PropTypes.string,
  }),
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

ReviewsRender.defaultProps = {
  error: null,
};
