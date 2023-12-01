import ApplyBtn from '../components/applyBtn/ApplyBtn';
import Dress from '../components/dressFilter/Dress';
import Filter from '../components/filter/Filter';
import Colors from '../components/filterColors/Colors';
import Size from '../components/filterSize/Size';
import ClothPage from '../components/clothPage/ClothPage';
import './styles/ClothPage.css';

function CasualPage() {
  return (
    <div>
      <div className="container">
        <div className="cloth_page">
          <div className="filter_on_page">
            <Filter />
            <Colors />
            <Size />
            <Dress />
            <ApplyBtn />
          </div>
          <ClothPage />
        </div>
      </div>
    </div>
  );
}

export default CasualPage;
