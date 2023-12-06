import './ClothPage.css';
import { useLocation } from 'react-router-dom';
import item from './image 10.png';
import star from './Star 1.png';

function ClothPage() {
  const location = useLocation();
  let sectionTitle;

  switch (location.pathname) {
    case '/casual':
      sectionTitle = 'Casual';
      break;
    case '/gym':
      sectionTitle = 'Gym';
      break;
    case '/formal':
      sectionTitle = 'Formal';
      break;
    case '/party':
      sectionTitle = 'Party';
      break;
    default:
      sectionTitle = 'Sorry';
  }

  return (
    <div className="cloth_page">
      <div className="cloth_block">
        <div className="cloth_heder">
          <h3>{sectionTitle}</h3>
          <div className="section_filter">
            <p>Showing 1-10 of 100 Products</p>
            <p>Sort by:</p>
            <select name="section_tab">
              <option value="popular">Most Popular</option>
              <option value="expensive">Most Expensive</option>
              <option value="cheap">Most Cheap</option>
            </select>
          </div>
        </div>
        <div className="cloth_item">
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
          <div className="cloth_card">
            <img src={item} alt="cloth" />
            <p>Gradient Graphic T-shirt</p>
            <div className="raiting">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <p>5/5</p>
            </div>
            <p>145$</p>
          </div>
        </div>
        <div className="more">
          <input type="button" className="load_more_btn" value="Load More" />
        </div>
      </div>
    </div>
  );
}

export default ClothPage;
