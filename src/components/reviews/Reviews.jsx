import PropTypes from 'prop-types';
import ReviewItem from '../review-item/ReviewItem';
import './Reviews.css';

function Reviews({ reviews }) {
  return (
    <section className="review">
      <div className="container">
        <div className="review_content">
          <h2 className="review_title">Our happy customers</h2>

          <div className="review_list">
            {reviews.map((review) => (
              <ReviewItem review={review} key={review.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      quote: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Reviews;
