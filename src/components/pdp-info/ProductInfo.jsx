// eslint-disable-next-line import/no-extraneous-dependencies
import { Rate, Space } from 'antd';
import './ProductInfo.css';
import { useState } from 'react';
import ProductColors from '../pdp-colors/ProductColors';
import ProductSizes from '../pdp-sizes/ProductSizes';
import ProductQuantity from '../pdp-quantity/ProductQuantity';

const product = {
  _id: '1',
  title: 'One Life Graphic T-shirt',
  src: [
    'https://www.upsieutoc.com/images/2020/06/27/img1.jpg',
    'https://www.upsieutoc.com/images/2020/06/27/img2.jpg',
    'https://www.upsieutoc.com/images/2020/06/27/img3.jpg',
    'https://www.upsieutoc.com/images/2020/06/27/img4.jpg',
  ],
  description:
    'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
  rating: 4.5,
  originalPrice: 300,
  discountedPrice: 260,
  // "sale": true,
  colors: ['#4F4631', '#314F4A', '#31344F'],
  sizes: ['Small', 'Medium', 'Large', 'X-Large'],
  count: 1,
};

const cartArr = [];

function ProductInfo() {
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState(product.colors[0]);
  // eslint-disable-next-line no-unused-vars
  const [size, setSize] = useState(product.sizes[0]);
  // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState(cartArr);

  // const handleColorClick = () => {
  //
  // }
  return (
    <div>
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <Space className="product-rating">
          <Rate allowHalf disable defaultValue={product.rating} /> {`${product.rating}/5`}
        </Space>
        {product.discountedPrice ? (
          <div className="price-info">
            <span className="discounted-price">${product.discountedPrice}</span>
            <span className="original-price">${product.originalPrice}</span>
            <span className="discount-percentages">
              -
              {(
                ((product.originalPrice - product.discountedPrice) / product.originalPrice) *
                100
              ).toFixed(0)}
              %
            </span>
          </div>
        ) : (
          <div>
            <span>Price: ${product.originalPrice}</span>
          </div>
        )}
        <p className="product-description">{product.description}</p>
      </div>
      <div className="product-color">
        <ProductColors colors={product.colors} onColorFunc={setColor} />
      </div>
      <div className="product-size">
        <ProductSizes sizes={product.sizes} onSizeFunc={setSize} />
      </div>
      <div className="product-quantity">
        <ProductQuantity onQuantityFunc={{ setQuantity, quantity }} />
      </div>
    </div>
  );
}

export default ProductInfo;
