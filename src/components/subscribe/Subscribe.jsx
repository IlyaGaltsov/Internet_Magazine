import { useState } from 'react';
import EmailImg from '../../assets/images/icons/email.svg';

import Modal from '../modal/Modal';
import './Subscribe.css';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = (emailToValidate) => {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailToValidate.toLowerCase());
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setEmailError('');
      setEmail('');
      setIsModalOpen(true);
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  return (
    <section className="subscribe">
      <div>
        <Modal isOpen={isModalOpen} onConfirm={() => setIsModalOpen(false)}>
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
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <div className="error-message">{emailError}</div>}
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
