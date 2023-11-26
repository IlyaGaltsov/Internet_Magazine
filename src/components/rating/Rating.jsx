import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import './Rating.css';

function Rating({ rating, productName }) {
  const renderStars = (ratingNumber, name) => {
    const fullStars = Math.floor(ratingNumber);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <FontAwesomeIcon key={`${name}-full-${i}`} icon={faStar} className="full" />
        ))}
        {Array.from({ length: emptyStars }, (_, i) => (
          <FontAwesomeIcon key={`${name}-empty-${i}`} icon={faStar} className="empty" />
        ))}
      </>
    );
  };

  return <div className="rating">{renderStars(rating, productName)}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
};

export default Rating;
