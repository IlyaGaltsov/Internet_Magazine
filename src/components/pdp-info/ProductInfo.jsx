import { Rate, Space } from 'antd';
import './ProductInfo.css';
import { shape } from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';
import ProductColors from '../pdp-colors/ProductColors';
import ProductSizes from '../pdp-sizes/ProductSizes';
import ProductQuantity from '../pdp-quantity/ProductQuantity';
import ProductAddToCart from '../pdp-add-to-cart/ProductAddToCart';

function ProductInfo({ productData }) {
  const { title, rating, description, colors, sizes, price, discountedPrice, discount, thumb } =
    productData;
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('userCart')) || []);

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(cart));
  }, [cart]);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = {
      itemId: Date.now(),
      itemTitle: title,
      itemColor: color,
      itemSize: size,
      itemQuantity: quantity,
      itemPrice: price,
      itemDiscountedPrice: discountedPrice,
      itemDiscount: discount,
      itemThumb: thumb,
    };

    dispatch(addToCart(newItem));

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
  };

  return (
    <div>
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <Space className="product-rating">
          <Rate allowHalf disabled defaultValue={rating} /> {`${rating}/5`}
        </Space>
        {discountedPrice ? (
          <div className="price-info">
            <span className="discounted-price">${discountedPrice}</span>
            <span className="original-price">${price}</span>
            <span className="discount-percentages">
              -{(((price - discountedPrice) / price) * 100).toFixed(0)}%
            </span>
          </div>
        ) : (
          <div>
            <span className="discounted-price">${price}</span>
          </div>
        )}
        <p className="product-description">{description}</p>
      </div>
      <div className="product-color">
        <ProductColors colors={colors} onColorFunc={setColor} />
      </div>
      <div className="product-size">
        <ProductSizes sizes={sizes} onSizeFunc={setSize} />
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
