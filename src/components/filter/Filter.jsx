import './Filter.css';
import filterPng from './img/Vector.png';
import arrowLeft from './img/arrowLeft.png'

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
                <div className='Tabs'>
                    <div className='tab'>
                        <p>T-shirt</p> 
                        <img src={arrowLeft} alt="arrow" />
                    </div>
                    <div className='tab'>
                        <p>Shorts</p>
                        <img src={arrowLeft} alt="arrow" />
                    </div>
                    <div className='tab'>
                        <p>Shirts</p>
                        <img src={arrowLeft} alt="arrow" />
                    </div>
                    <div className='tab'>
                        <p>Hoodie</p>
                        <img src={arrowLeft} alt="arrow" />
                    </div>
                    <div className='tab'>
                        <p>Jeans</p>
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
    )
}

export default Filter;