import EmailImg from '../../assets/images/icons/email.svg';
import './Subscribe.css';

function Subscribe() {
  return (
    <section className="subscribe">
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

            <button className="subscribe_btn" type="button">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
