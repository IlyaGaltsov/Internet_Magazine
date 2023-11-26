import ApplyBtn from '../components/applyBtn/ApplyBtn';
import Dress from '../components/dressFilter/Dress';
import Filter from '../components/filter/Filter';
import Colors from '../components/filterColors/Colors';
import Size from '../components/filterSize/Size';

function PartyPage() {
  return (
    <div>
      <div className="container">
        <Filter />
        <Colors />
        <Size />
        <Dress />
        <ApplyBtn />
      </div>
    </div>
  );
}

export default PartyPage;
