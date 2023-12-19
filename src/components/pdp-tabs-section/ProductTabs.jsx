import { useEffect, useState } from 'react';
import { Rate, Space } from 'antd';
import { shape } from 'prop-types';
import ReviewModal from '../pdp-review-modal/ReviewModal';
import Accordion from '../accordion/Accordion';
import Check from '../../assets/images/icons/check.svg';
import './ProductTabs.css';

const faqsData = [
  {
    question: 'What is my size?',
    answer: 'You can find your size by referring to our size chart located on the product page.',
  },
  {
    question: 'Do you have a referral program?',
    answer: "Yes, we have a referral program. Check our 'Referral Program' page for more details.",
  },
  {
    question: 'Where can I check the status of my order?',
    answer:
      "You can check the status of your order in the 'Order History' section of your account.",
  },
];

function ProductTabs({ productData }) {
  const [activeTab, setActiveTab] = useState('reviews');
  // const [reviews, setReviews] = useState(productData.reviews);
  const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem('userReviews')) || {});
  const [showModal, setShowModal] = useState(false);

  const reviewsArray = reviews[productData.id] || []; // get reviews array for specific id

  useEffect(() => {
    localStorage.setItem('userReviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleTabClick = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const handleWriteReviewClick = () => {
    setShowModal(true);
  };

  const handleModalSubmit = (newReview) => {
    const updatedReviews = { ...reviews };
    if (updatedReviews[productData.id]) {
      updatedReviews[productData.id].push(newReview);
    } else {
      updatedReviews[productData.id] = [newReview];
    }

    setReviews(updatedReviews);
    // setReviews([...reviews, newReview]);
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
            <p>{productData.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Est placerat in egestas erat imperdiet
              sed euismod nisi. Tristique nulla aliquet enim tortor at auctor. Sit amet consectetur
              adipiscing elit duis tristique sollicitudin. Dignissim sodales ut eu sem integer. Quam
              adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Arcu cursus euismod
              quis viverra nibh cras. Odio pellentesque diam volutpat commodo sed egestas egestas
              fringilla. Sodales neque sodales ut etiam sit. Auctor augue mauris augue neque gravida
              in fermentum et sollicitudin. Consectetur purus ut faucibus pulvinar elementum integer
              enim neque. Mauris ultrices eros in cursus turpis massa tincidunt. Nibh nisl
              condimentum id venenatis. Dui sapien eget mi proin sed libero enim sed faucibus.
            </p>
            <p>
              <span className="details-subheader">Rise:</span> High Hip
            </p>
            <p>
              <span className="details-subheader">Fit:</span> Fitted Leg
            </p>
            <p>
              <span className="details-subheader">Fit:</span> Skinny
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <div className="reviews-header">
              <h3>
                All Reviews <span>({reviewsArray.length})</span>
              </h3>
              <button type="button" onClick={handleWriteReviewClick}>
                Write Review
              </button>
            </div>
            <div className="reviews-list">
              {!reviewsArray.length && (
                <div className="no-reviews">
                  <p>No reviews for the product yet...</p>
                  <p>Be the first to leave a review!</p>
                </div>
              )}
              {reviewsArray.map((review) => (
                <div key={review.name} className="review-card">
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

        {activeTab === 'faqs' && (
          <div>
            <Accordion accordionData={faqsData} />
          </div>
        )}
      </div>
      {showModal && (
        <ReviewModal onSubmit={handleModalSubmit} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

ProductTabs.propTypes = {
  productData: shape().isRequired,
};

export default ProductTabs;
