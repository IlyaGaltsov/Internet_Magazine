import './Dress.css';
import arrowLeft from './img/arrowLeft.png';

function Dress() {
  return (
    <div className="filter">
      <div className="filter_conainer">
        <div className="menu_dress">
          <div className="title_dress">
            <h2>Dress Style</h2>
          </div>
        </div>
        <div className="Tabs_Dress">
          <div className="tab">
            <p>Casual</p>
            <img src={arrowLeft} alt="arrow" />
          </div>
          <div className="tab">
            <p>Formal</p>
            <img src={arrowLeft} alt="arrow" />
          </div>
          <div className="tab">
            <p>Party</p>
            <img src={arrowLeft} alt="arrow" />
          </div>
          <div className="tab">
            <p>Gym</p>
            <img src={arrowLeft} alt="arrow" />
          </div>
        </div>
        {/*
         * <div class="tab-content" id="content1">
         *     <p>Content for Tab 1</p>
         * </div>
         * <div class="tab-content" id="content2">
         *     <p>Content for Tab 2</p>
         * </div>
         * <div class="tab-content" id="content3">
         *     <p>Content for Tab 3</p>
         * </div>
         */}
      </div>
    </div>
  );
}

export default Dress;
