import { useState } from 'react';
import { arrayOf, string } from 'prop-types';
import './ProductImages.css';

function ProductImages({ productImages }) {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const handleThumbNailClick = (clickedItem, index) => {
    setMainImage(clickedItem);
    setActiveThumbnailIndex(index);
  };

  return (
    <div className="images-container">
      <div className="thumbnails-container">
        {productImages.length &&
          productImages.map((thumbnail, index) => (
            <a
              key={thumbnail}
              href={`#thumbnail_${index}`}
              className={`thumbnail ${index === activeThumbnailIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleThumbNailClick(thumbnail, index);
              }}
            >
              <img
                src={`/assets/images/products/${thumbnail}.png`}
                alt={`thumbnail_${index + 1}`}
                className="thumbnail-image"
              />
            </a>
          ))}
      </div>
      <div className="main-image-container">
        <img
          src={`/assets/images/products/${mainImage}.png`}
          alt="pdp_main_img"
          className="main-image"
        />
      </div>
    </div>
  );
}

ProductImages.propTypes = {
  productImages: arrayOf(string).isRequired,
};

export default ProductImages;
