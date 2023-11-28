import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import Check from '../../assets/images/icons/check.svg';

import './ReviewItem.css';

function ReviewItem({ review }) {
  return (
    <div className="review_item">
      <Rating rating={review.rating} />
      <div className="review_item-name">
        <span>{review.name}</span>
        <img src={Check} alt={review.name} />
      </div>
      <blockquote>{review.quote}</blockquote>
    </div>
  );
}

ReviewItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;
