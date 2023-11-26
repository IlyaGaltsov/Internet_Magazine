import './Size.css';
import vector from './Vector (2).png';

function Size() {
  return (
    <div className="size_container">
      <div className="title_size">
        <p>Size</p>
        <img src={vector} alt="arrowup" />
      </div>
      <div className="size_chart">
        <ul className="chart_menu">
          <li>XX-Small</li>
          <li>X-Small</li>
          <li>Small</li>
          <li>Medium</li>
          <li>Large</li>
          <li>X-Large</li>
          <li>XX-Large</li>
          <li>3X-Large</li>
          <li>4X-Large</li>
        </ul>
      </div>
    </div>
  );
}

export default Size;
