import ClothPage from '../components/clothPage/ClothPage';
import Filter from '../components/filter/Filter';
import './styles/ClothPage.css';

function GymPage() {
  return (
    <div>
      <div className="container">
        <div className="cloth_page">
          <div className="filter_on_page">
            <Filter />
          </div>
          <ClothPage />
        </div>
      </div>
    </div>
  );
}

export default GymPage;
