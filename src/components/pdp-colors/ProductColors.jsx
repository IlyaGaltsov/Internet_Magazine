import { arrayOf, func, string } from 'prop-types';
// import Color from "./Color";
import { useState } from 'react';
import './ProductColors.css';

function ProductColors({ colors, onColorFunc }) {
  const [selectedColor, setSelectedColor] = useState(0);

  const handleColorClick = (color, index) => {
    onColorFunc(color);
    setSelectedColor(index);
  };

  return (
    <div>
      <p>Select Colors</p>
      {colors.map((color, index) => (
        // <Color color={color} onColor={onColorFunc}/>
        <input
          type="button"
          style={{ background: color }}
          key={color}
          onClick={() => handleColorClick(color, index)}
          className={`color-btn ${index === selectedColor ? 'active' : ''}`}
        />
        // <input type="button" style={{background: color}} key={color} onClick={handleColorCLick} className="color-btn"/>
      ))}
    </div>
  );
}

ProductColors.propTypes = {
  colors: arrayOf(string).isRequired,
  onColorFunc: func.isRequired,
};

export default ProductColors;
