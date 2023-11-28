import { useState } from 'react';
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/ReviewItem';
import ArrowPreview from '../../assets/images/arrows/arrow-prev.svg';
import ArrowNext from '../../assets/images/arrows/arrow-next.svg';
import './Reviews.css';

function Reviews({ reviews }) {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const REVIEWS_TO_SHOW = 3;

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - REVIEWS_TO_SHOW : prevIndex - 1,
    );
  };

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex + REVIEWS_TO_SHOW >= reviews.length ? 0 : prevIndex + 1,
    );
  };
  return (
    <section className="review">
      <div className="container">
        <div className="review_content">
          <h2 className="review_title">Our happy customers</h2>
          <div className="carousel-controls">
            <button type="button" onClick={handlePrevReview}>
              <img src={ArrowPreview} alt="arrow-preview" />
            </button>
            <button type="button" onClick={handleNextReview}>
              <img src={ArrowNext} alt="arrow-next" />
            </button>
          </div>

          <div className="review_list">
            {reviews
              .slice(currentReviewIndex, currentReviewIndex + REVIEWS_TO_SHOW)
              .map((review) => (
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
