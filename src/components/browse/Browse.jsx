import { Link } from 'react-router-dom';
import { styleItems } from '../../constants/browse';

import './Browse.css';

function Browse() {
  return (
    <section className="browse">
      <div className="container">
        <div className="browse_content">
          <div className="browse_title">
            <h2>Browser by dress style</h2>
          </div>
          <div className="browse-img">
            {styleItems.map((styleItem) => (
              <div className={styleItem.group}>
                {styleItem.items.map((item) => (
                  <Link to={item.link} className="browse-img_item">
                    <h3 className="browse-img_title">{item.title}</h3>
                    <img src={item.image} alt={item.title} />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Browse;
