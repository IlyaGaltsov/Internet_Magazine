import SearchImg from '../../assets/images/icons/search.svg';
import './Search.css';

function Search() {
  const searchHandler = (e) => {
    e.preventDefault();
    // console.log('keyword', e.target.value);
  };

  return (
    <div className="search-form">
      <div className="search-icon">
        <img src={SearchImg} alt="search" />
      </div>
      <input
        type="text"
        id="search_field"
        className="form-control"
        style={{ image: `url(${SearchImg})` }}
        placeholder="Search for products..."
        onChange={(e) => searchHandler(e)}
      />
    </div>
  );
}

export default Search;
