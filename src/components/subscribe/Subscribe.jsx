import { useState } from 'react';
import EmailImg from '../../assets/images/icons/email.svg';

import Modal from '../modal/Modal';
import './Subscribe.css';

function Subscribe() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubscribe = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="subscribe">
      <div>
        <Modal
          isOpen={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onConfirm={() => setIsModalOpen(false)}
        >
          Дякуємо, що підписались!
        </Modal>

        <div className="container">
          <div className="subscribe_content">
            <h2 className="subscribe_title">Stay upto date about our latest offers</h2>
            <div className="subscribe_wrapper">
              <div className="subscribe_email-wrapper">
                <div className="subscribe_email-icon">
                  <img src={EmailImg} alt="email" />
                </div>
                <input
                  className="subscribe_email"
                  style={{ image: `url(${EmailImg})` }}
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>

              <button className="subscribe_btn" type="button" onClick={handleSubscribe}>
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
