import { useState } from 'react';
import { Rate, Space } from 'antd';
import ReviewModal from '../pdp-review-modal/ReviewModal';
import Check from '../../assets/images/icons/check.svg';
import './ProductTabs.css';

const reviewsArr = [
  {
    id: 1,
    name: 'QA Test',
    rating: 3.5,
    review:
      '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: 'August 14 2023',
  },
  {
    id: 1,
    name: 'QA Test',
    rating: 3.5,
    review:
      '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: 'August 14 2023',
  },
  {
    id: 1,
    name: 'QA Test',
    rating: 3.5,
    review:
      '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: 'August 14 2023',
  },
  {
    id: 1,
    name: 'QA Test',
    rating: 3.5,
    review:
      '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: 'August 14 2023',
  },
  {
    id: 1,
    name: 'QA Test',
    rating: 3.5,
    review:
      '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: 'August 14 2023',
  },
];

function ProductTabs() {
  const [activeTab, setActiveTab] = useState('reviews');
  const [reviews, setReviews] = useState(reviewsArr);
  const [showModal, setShowModal] = useState(false);

  const handleTabClick = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const handleWriteReviewClick = () => {
    setShowModal(true);
  };

  const handleModalSubmit = (newReview) => {
    setReviews([...reviews, newReview]);
    setShowModal(false);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => {
            handleTabClick('details');
          }}
        >
          Product Details
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => {
            handleTabClick('reviews');
          }}
        >
          Rating & Reviews
        </button>
        <button
          type="button"
          className={`tab-btn ${activeTab === 'faqs' ? 'active' : ''}`}
          onClick={() => {
            handleTabClick('faqs');
          }}
        >
          FAQs
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'details' && (
          <div>
            <div className="details-header">
              <h3>Product Details</h3>
            </div>
            <p>Short description</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div className="reviews-header">
              <h3>
                All Reviews <span>({reviews.length})</span>
              </h3>
              <button type="button" onClick={handleWriteReviewClick}>
                Write Review
              </button>
            </div>
            <div className="reviews-list">
              {reviews.map((review, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index} className="review-card">
                  <Space className="product-rating">
                    <Rate allowHalf disabled defaultValue={review.rating} />
                  </Space>
                  <div className="review-card-name">
                    <span>{review.name}</span>
                    <img src={Check} alt={review.name} />
                  </div>
                  <p className="review-card-text">{review.review}</p>
                  <p className="review-card-date">
                    Posted on {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <ReviewModal onSubmit={handleModalSubmit} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default ProductTabs;
