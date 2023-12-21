import './ClothPage.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from '../filter/Filter';

function ClothPage() {
  const location = useLocation();
  let sectionTitle;

  switch (location.pathname) {
    case '/casual':
      sectionTitle = 'Casual';
      break;
    case '/gym':
      sectionTitle = 'Gym';
      break;
    case '/formal':
      sectionTitle = 'Formal';
      break;
    case '/party':
      sectionTitle = 'Party';
      break;
    default:
      sectionTitle = 'Sorry';
  }

  const [casualProducts, setCasualProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(9);
  const [isLoading, setIsLoading] = useState(false);
  const [sortOption, setSortOption] = useState('popular');
  const [selectedFilters, setSelectedFilters] = useState({}); // Добавил состояние selectedFilters

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/casualProduct');
        setCasualProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const sortProducts = (products, option) => {
    switch (option) {
      case 'expensive':
        return [...products].sort((a, b) => b.price - a.price);
      case 'cheap':
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return [...products].sort((a, b) => b.rating - a.rating);
    }
  };

  const loadMore = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisible) => prevVisible + 9);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="cloth_page">
      <div className="cloth_heder">
        <h3>{sectionTitle}</h3>
        <div className="section_filter">
          <p>{`Showing 1-${visibleProducts} of ${casualProducts.length} Products`}</p>
          <p>Sort by:</p>
          <select
            name="section_tab"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="expensive">Most Expensive</option>
            <option value="cheap">Most Cheap</option>
          </select>
        </div>
      </div>
      <div className="cloth_block">
        <Filter onApplyFilter={setSelectedFilters} />
        <div className="cloth_item">
          {sortProducts(
            casualProducts
              .filter(
                (casualProduct) =>
                  (!selectedFilters.tShirt || casualProduct.cloth === 'tshirt') &&
                  (!selectedFilters.jeans || casualProduct.cloth === 'jeans') &&
                  (!selectedFilters.shorts || casualProduct.cloth === 'shorts') &&
                  (!selectedFilters.shirts || casualProduct.cloth === 'shirts') &&
                  (!selectedFilters.hoodie || casualProduct.cloth === 'hoodie') &&
                  (!selectedFilters.green || casualProduct.color === 'green') &&
                  (!selectedFilters.red || casualProduct.color === 'red') &&
                  (!selectedFilters.yellow || casualProduct.color === 'yellow') &&
                  (!selectedFilters.orange || casualProduct.color === 'orange') &&
                  (!selectedFilters.blue || casualProduct.color === 'blue') &&
                  (!selectedFilters.darkblue || casualProduct.color === 'darkblue') &&
                  (!selectedFilters.purple || casualProduct.color === 'purple') &&
                  (!selectedFilters.pink || casualProduct.color === 'pink') &&
                  (!selectedFilters.white || casualProduct.color === 'white') &&
                  (!selectedFilters.black || casualProduct.color === 'black') &&
                  (!selectedFilters.xxSmall || casualProduct.size === 'xxsmall') &&
                  (!selectedFilters.xSmall || casualProduct.size === 'xsmall') &&
                  (!selectedFilters.small || casualProduct.size === 'small') &&
                  (!selectedFilters.xLarge || casualProduct.size === 'slarge') &&
                  (!selectedFilters.xxLarge || casualProduct.size === 'xxlarge') &&
                  (!selectedFilters.large || casualProduct.size === 'large'),
              )
              .slice(0, visibleProducts),
            sortOption,
          ).map((product) => {
            console.log(product);
            const { id, title, price, thumbnail, rating, ratingStars } = product;
            return (
              <Link to={`/product/${id}`} key={id} className="cloth_card_link">
                <div className="cloth_card" key={id}>
                  <img src={thumbnail} alt={title} />
                  <p>{title}</p>
                  <div className="raiting">
                    <p>{ratingStars}</p>
                    <p>{`${rating}/5`}</p>
                  </div>
                  <p>{`${price}$`}</p>
                </div>
              </Link>
            );
          })}
        </div>
        ;
      </div>
      <div className="more">
        <input
          type="button"
          className="load_more_btn"
          value={isLoading ? 'Loading...' : 'Load More'}
          onClick={loadMore}
          disabled={isLoading || visibleProducts >= casualProducts.length}
        />
      </div>
    </div>
  );
}

export default ClothPage;
