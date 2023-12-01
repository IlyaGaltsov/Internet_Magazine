import vector from './Vector (2).png';
import './Colors.css';

function Colors() {
  return (
    <div className="color">
      <div className="title">
        <p>Colors</p>
        <img src={vector} alt="arrow up" />
      </div>
      <div className="setColors">
        <input type="button" className="green color_btn" />
        <input type="button" className="red color_btn" />
        <input type="button" className="yelow color_btn" />
        <input type="button" className="orange color_btn" />
        <input type="button" className="blue color_btn" />
        <input type="button" className="darkblue color_btn" />
        <input type="button" className="purple color_btn" />
        <input type="button" className="pink color_btn" />
        <input type="button" className="white color_btn" />
        <input type="button" className="black color_btn" />
      </div>
    </div>
  );
}

export default Colors;
