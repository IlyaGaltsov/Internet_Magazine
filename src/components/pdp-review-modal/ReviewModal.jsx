import { useState } from 'react';
import { func } from 'prop-types';
import './ReviewModal.css';
import { Rate, Space } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from 'formik';
import { reviewModalScheme } from './ReviewModalScheme';

function ReviewModal({ onSubmit, onClose }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      review: '',
    },
    validationSchema: reviewModalScheme,
    // eslint-disable-next-line no-use-before-define
    onSubmit: () => handleReviewSubmit(),
  });
  const { name, review } = formik.values;

  // const [name, setName] = useState('');
  // const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState(false);

  function handleReviewSubmit() {
    const newReview = {
      id: Date.now(),
      name,
      review,
      rating,
      date: new Date().toLocaleDateString(),
    };

    if (rating > 0) {
      onSubmit(newReview);
    } else {
      setError(true);
    } // TODO need to think of better solution for required rating
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Write a Review</h2>
        <Space className="modal-rating">
          <Rate
            allowHalf
            onChange={(value) => {
              setRating(value);
            }}
          />
        </Space>
        {error && <div className="review-error">Select rating</div>}

        <label htmlFor="name">
          Name:
          <input name="name" id="name" type="text" value={name} onChange={formik.handleChange} />
          {formik.errors.name && <div className="review-error">{formik.errors.name}</div>}
        </label>

        <label htmlFor="review">
          Review:
          <textarea name="review" id="review" value={review} onChange={formik.handleChange} />
          {formik.errors.review && <div className="review-error">{formik.errors.review}</div>}
        </label>

        {/* <label htmlFor="name"> */}
        {/*  Name: */}
        {/*  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /> */}
        {/* </label> */}

        {/* <label htmlFor="review"> */}
        {/*  Review: */}
        {/*  <textarea id="review" value={review} onChange={(e) => setReview(e.target.value)} /> */}
        {/* </label> */}

        <button type="button" onClick={formik.handleSubmit}>
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
