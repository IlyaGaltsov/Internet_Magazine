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
        <input type="button" className="green" />
        <input type="button" className="red" />
        <input type="button" className="yelow" />
        <input type="button" className="orange" />
        <input type="button" className="blue" />
        <input type="button" className="darkblue" />
        <input type="button" className="purple" />
        <input type="button" className="pink" />
        <input type="button" className="white" />
        <input type="button" className="black" />
      </div>
    </div>
  );
}

export default Colors;
