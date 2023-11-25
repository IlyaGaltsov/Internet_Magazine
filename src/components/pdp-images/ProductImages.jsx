import { useState } from 'react';
import { productImages } from '../../constants/pdp';
import './ProductImages.css';

function ProductImages() {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(false);
  const handleThumbNailClick = (clickedItem, index) => {
    setMainImage(clickedItem);
    setActiveThumbnailIndex(index);
  };
  return (
    <div className="images-container">
      <div className="thumbnails-container">
        {productImages.map((thumbnail, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <img
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            src={thumbnail}
            alt={`thumbnail_${index + 1}`}
            className={`thumbnail ${index === activeThumbnailIndex ? 'active' : ''}`}
            onClick={() => handleThumbNailClick(thumbnail, index)}
          />
        ))}
      </div>
      <div className="main-image-container">
        <img src={mainImage} alt="pdp_main_img" className="main-image" />
      </div>
    </div>
  );
}

export default ProductImages;
