import { Link } from 'react-router-dom';
import { styleItems } from '../../constants/browse';

import './Browse.css';

function Browse() {
  return (
    <section className="browse">
      <div className="container">
        <div className="browse_content">
          <h2 className="browse_title">Browser by dress style</h2>
          <div className="browse-img">
            {styleItems.map((styleItem) => (
              <div className={styleItem.group} key={styleItem.id}>
                {styleItem.items.map((item) => (
                  <Link to={item.link} className="browse-img_item" key={item.id}>
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
