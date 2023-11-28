import PropTypes from 'prop-types';
import { Rate } from 'antd';

import './Rating.css';

function Rating({ rating }) {
  return (
    <div>
      <Rate className="rating" allowHalf defaultValue={rating} /> {`${rating}/5`}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
