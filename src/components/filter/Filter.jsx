/* eslint-disable jsx-a11y/label-has-associated-control */
import './Filter.css';
import filterPng from './img/Vector.png';

function Filter() {
  return (
    <div className="filter">
      <div className="filter_conainer">
        <div className="menu_filter">
          <div className="title">
            <h2>Filters</h2>
          </div>
          <img src={filterPng} alt="Menu" />
        </div>
        <div className="filter_forms">
          <form className="form">
            <label className="label_for_filters">
              T-shirt
              <input type="checkbox" />
            </label>
            <label className="label_for_filters">
              Jeans
              <input type="checkbox" />
            </label>
            <label className="label_for_filters">
              Shorts
              <input type="checkbox" />
            </label>
            <label className="label_for_filters">
              Shirts
              <input type="checkbox" />
            </label>
            <label className="label_for_filters">
              Hoodie
              <input type="checkbox" />
            </label>
            <div className="title">
              <p>Colors</p>
            </div>
            <div className="setColors">
              <input type="button" className="green color_btn" />
              <input type="button" className="red color_btn" />
              <input type="button" className="yellow color_btn" />
              <input type="button" className="orange color_btn" />
              <input type="button" className="blue color_btn" />
              <input type="button" className="darkblue color_btn" />
              <input type="button" className="purple color_btn" />
              <input type="button" className="pink color_btn" />
              <input type="button" className="white color_btn" />
              <input type="button" className="black color_btn" />
            </div>
            <div className="size_container">
              <div className="title_size">
                <p>Size</p>
              </div>
              <div className="size_chart">
                <input type="button" className="size_btn" value="XX-Small" />
                <input type="button" className="size_btn" value="X-Small" />
                <input type="button" className="size_btn" value="Small" />
                <input type="button" className="size_btn" value="X-Large" />
                <input type="button" className="size_btn" value="XX-Large" />
                <input type="button" className="size_btn" value="Large" />
                <input type="button" className="size_btn" value="3X-Large" />
                <input type="button" className="size_btn" value="4X-Large" />
                <input type="button" className="size_btn" value="Medium" />
              </div>
            </div>
            <div className="price">
              <div className="title_price">
                <h2>Price</h2>
              </div>
              <label className="label_for_filters">
                from 80$ to 120$
                <input type="checkbox" />
              </label>
              <label className="label_for_filters">
                from 130$ to 180$
                <input type="checkbox" />
              </label>
              <label className="label_for_filters">
                from 180$ to 260$
                <input type="checkbox" />
              </label>
            </div>
            <div className="sex">
              <div className="title_sex">
                <h2>Sex</h2>
              </div>
              <label className="label_for_filters">
                Male
                <input type="checkbox" />
              </label>
              <label className="label_for_filters">
                Female
                <input type="checkbox" />
              </label>
            </div>
            <div className="applyBtn">
              <input type="button" className="btn" value="Apply Filter" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
