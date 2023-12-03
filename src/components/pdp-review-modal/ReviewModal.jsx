import { useState } from 'react';
import { func } from 'prop-types';

function ReviewModal({ onSubmit, onClose }) {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = () => {
    const newReview = {
      id: Date.now(),
      name,
      review,
      rating,
      date: new Date().toLocaleDateString(),
    };
    onSubmit(newReview);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Write a Review</h2>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="review">
          Review:
          <textarea id="review" value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
        <label htmlFor="rating">
          Rating:
          <input
            id="rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

ReviewModal.propTypes = {
  onSubmit: func.isRequired,
  onClose: func.isRequired,
};

export default ReviewModal;
