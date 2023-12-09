import { Rate, Space } from 'antd';
import './ProductInfo.css';
import { shape } from 'prop-types';
import { useState } from 'react';
import ProductColors from '../pdp-colors/ProductColors';
import ProductSizes from '../pdp-sizes/ProductSizes';
import ProductQuantity from '../pdp-quantity/ProductQuantity';
import ProductAddToCart from '../pdp-add-to-cart/ProductAddToCart';

const cartArr = [];

function ProductInfo({ productData }) {
  const [color, setColor] = useState(productData.colors[0]);
  const [size, setSize] = useState(productData.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(cartArr);

  const handleAddToCart = () => {
    const newItem = {
      id: Date.now(),
      itemTitle: productData.title,
      itemColor: color,
      itemSize: size,
      itemQuantity: quantity,
    };

    const existingItemIndex = cart.findIndex(
      (item) =>
        item.itemTitle === newItem.itemTitle &&
        item.itemColor === newItem.itemColor &&
        item.itemSize === newItem.itemSize,
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].itemQuantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]);
    }

    console.log('User cart', cart);
  };

  // const handleColorClick = () => {
  //
  // }
  return (
    <div>
      <div className="product-info">
        <h2 className="product-title">{productData.title}</h2>
        <Space className="product-rating">
          <Rate allowHalf disabled defaultValue={productData.rating} /> {`${productData.rating}/5`}
        </Space>
        {productData.discountedPrice ? (
          <div className="price-info">
            <span className="discounted-price">${productData.discountedPrice}</span>
            <span className="original-price">${productData.price}</span>
            <span className="discount-percentages">
              -
              {(
                ((productData.price - productData.discountedPrice) / productData.price) *
                100
              ).toFixed(0)}
              %
            </span>
          </div>
        ) : (
          <div>
            <span className="discounted-price">${productData.price}</span>
          </div>
        )}
        <p className="product-description">{productData.description}</p>
      </div>
      <div className="product-color">
        <ProductColors colors={productData.colors} onColorFunc={setColor} />
      </div>
      <div className="product-size">
        <ProductSizes sizes={productData.sizes} onSizeFunc={setSize} />
      </div>
      <div className="product-quantity">
        <ProductQuantity onQuantityFunc={{ setQuantity, quantity }} />
        <ProductAddToCart onAddToCartFunc={handleAddToCart} />
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  productData: shape().isRequired,
};

export default ProductInfo;
