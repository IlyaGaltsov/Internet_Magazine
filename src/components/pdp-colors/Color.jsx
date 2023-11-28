// import {func, string} from "prop-types";
// import {useState} from "react";
// import './ProductColors.css';
//
// function Color({color, onColor}) {
//
//     const [selectedColor, setSelectedColor] = useState(false);
//
//     const handleColorClick = () => {
//         onColor(color);
//         setSelectedColor(color);
//     }
//
//     return (
//         <input type="button" style={{background: color}} key={color} onClick={handleColorClick}
//                className={`color-btn ${selectedColor === color ? 'active' : ''}`}/>
//     );
// }
//
// Color.propTypes = {
//     color: string.isRequired,
//     onColor: func.isRequired
// }
//
// export default Color;
