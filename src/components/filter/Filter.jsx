/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';
import filterPng from './img/Vector.png';

function Filter({ onApplyFilter }) {
  const [selectedFilters, setSelectedFilters] = useState({
    tShirt: false,
    jeans: false,
    shorts: false,
    shirts: false,
    hoodie: false,
    green: false,
    red: false,
    yellow: false,
    orange: false,
    blue: false,
    darkblue: false,
    purple: false,
    pink: false,
    white: false,
    black: false,
    xxSmall: false,
    xSmall: false,
    small: false,
    xLarge: false,
    xxLarge: false,
    large: false,
    xxxLarge: false,
    xxxxLarge: false,
    medium: false,
    price1: false,
    price2: false,
    price3: false,
    male: false,
    female: false,
  });

  const handleCheckboxChange = (filter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleApplyFilter = () => {
    onApplyFilter(selectedFilters);
  };

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
              <input
                type="checkbox"
                checked={selectedFilters.tShirt}
                onChange={() => handleCheckboxChange('tShirt')}
              />
            </label>
            <label className="label_for_filters">
              Jeans
              <input
                type="checkbox"
                checked={selectedFilters.jeans}
                onChange={() => handleCheckboxChange('jeans')}
              />
            </label>
            <label className="label_for_filters">
              Shorts
              <input
                type="checkbox"
                checked={selectedFilters.shorts}
                onChange={() => handleCheckboxChange('shorts')}
              />
            </label>
            <label className="label_for_filters">
              Shirts
              <input
                type="checkbox"
                checked={selectedFilters.shirts}
                onChange={() => handleCheckboxChange('shirts')}
              />
            </label>
            <label className="label_for_filters">
              Hoodie
              <input
                type="checkbox"
                checked={selectedFilters.hoodie}
                onChange={() => handleCheckboxChange('hoodie')}
              />
            </label>
            <p className="color_filter">Color</p>
            <label className="label_for_filters">
              Green
              <input
                type="checkbox"
                checked={selectedFilters.green}
                onChange={() => handleCheckboxChange('green')}
              />
            </label>
            <label className="label_for_filters">
              Red
              <input
                type="checkbox"
                checked={selectedFilters.red}
                onChange={() => handleCheckboxChange('red')}
              />
            </label>
            <label className="label_for_filters">
              Yellow
              <input
                type="checkbox"
                checked={selectedFilters.yellow}
                onChange={() => handleCheckboxChange('yellow')}
              />
            </label>
            <label className="label_for_filters">
              Orange
              <input
                type="checkbox"
                checked={selectedFilters.orange}
                onChange={() => handleCheckboxChange('orange')}
              />
            </label>
            <label className="label_for_filters">
              Blue
              <input
                type="checkbox"
                checked={selectedFilters.blue}
                onChange={() => handleCheckboxChange('blue')}
              />
            </label>
            <label className="label_for_filters">
              Dark Blue
              <input
                type="checkbox"
                checked={selectedFilters.darkblue}
                onChange={() => handleCheckboxChange('darkblue')}
              />
            </label>
            <label className="label_for_filters">
              Purple
              <input
                type="checkbox"
                checked={selectedFilters.purple}
                onChange={() => handleCheckboxChange('purple')}
              />
            </label>
            <label className="label_for_filters">
              Pink
              <input
                type="checkbox"
                checked={selectedFilters.pink}
                onChange={() => handleCheckboxChange('pink')}
              />
            </label>
            <label className="label_for_filters">
              White
              <input
                type="checkbox"
                checked={selectedFilters.white}
                onChange={() => handleCheckboxChange('white')}
              />
            </label>
            <label className="label_for_filters">
              Black
              <input
                type="checkbox"
                checked={selectedFilters.black}
                onChange={() => handleCheckboxChange('black')}
              />
            </label>
            <p className="size_filter">Size</p>
            <label className="label_for_filters">
              XX-Small
              <input
                type="checkbox"
                checked={selectedFilters.xxSmall}
                onChange={() => handleCheckboxChange('xxSmall')}
              />
            </label>
            <label className="label_for_filters">
              X-Small
              <input
                type="checkbox"
                checked={selectedFilters.xSmall}
                onChange={() => handleCheckboxChange('xSmall')}
              />
            </label>
            <label className="label_for_filters">
              Small
              <input
                type="checkbox"
                checked={selectedFilters.small}
                onChange={() => handleCheckboxChange('small')}
              />
            </label>
            <label className="label_for_filters">
              X-Large
              <input
                type="checkbox"
                checked={selectedFilters.xLarge}
                onChange={() => handleCheckboxChange('xLarge')}
              />
            </label>
            <label className="label_for_filters">
              XX-Large
              <input
                type="checkbox"
                checked={selectedFilters.xxLarge}
                onChange={() => handleCheckboxChange('xxLarge')}
              />
            </label>
            <label className="label_for_filters">
              Large
              <input
                type="checkbox"
                checked={selectedFilters.large}
                onChange={() => handleCheckboxChange('large')}
              />
            </label>
            <label className="label_for_filters">
              3X-Large
              <input
                type="checkbox"
                checked={selectedFilters.xxxLarge}
                onChange={() => handleCheckboxChange('xxxLarge')}
              />
            </label>
            <label className="label_for_filters">
              4X-Large
              <input
                type="checkbox"
                checked={selectedFilters.xxxxLarge}
                onChange={() => handleCheckboxChange('xxxxLarge')}
              />
            </label>
            <label className="label_for_filters">
              Medium
              <input
                type="checkbox"
                checked={selectedFilters.medium}
                onChange={() => handleCheckboxChange('medium')}
              />
            </label>
            <p className="price_filter">Price</p>
            <label className="label_for_filters">
              Price from 80$ to 120$
              <input
                type="checkbox"
                checked={selectedFilters.price1}
                onChange={() => handleCheckboxChange('price1')}
              />
            </label>
            <label className="label_for_filters">
              Price from 130$ to 180$
              <input
                type="checkbox"
                checked={selectedFilters.price2}
                onChange={() => handleCheckboxChange('price2')}
              />
            </label>
            <label className="label_for_filters">
              Price from 180$ to 260$
              <input
                type="checkbox"
                checked={selectedFilters.price3}
                onChange={() => handleCheckboxChange('price3')}
              />
            </label>
            <p className="gender_filter">Gender</p>
            <label className="label_for_filters">
              Male
              <input
                type="checkbox"
                checked={selectedFilters.male}
                onChange={() => handleCheckboxChange('male')}
              />
            </label>
            <label className="label_for_filters">
              Female
              <input
                type="checkbox"
                checked={selectedFilters.female}
                onChange={() => handleCheckboxChange('female')}
              />
            </label>
            <div className="applyBtn">
              <input
                type="button"
                className="btn"
                value="Apply Filter"
                onClick={handleApplyFilter}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
Filter.propTypes = {
  onApplyFilter: PropTypes.func.isRequired,
};
export default Filter;
