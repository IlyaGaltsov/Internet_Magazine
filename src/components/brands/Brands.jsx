import './Brands.css';
import Calvin from '../../assets/images/brands/calvin.svg';
import Gucci from '../../assets/images/brands/gucci.svg';
import Prada from '../../assets/images/brands/prada.svg';
import Versace from '../../assets/images/brands/versace.svg';
import Zara from '../../assets/images/brands/zara.svg';

function Brands() {
  const brands = [
    { name: 'Vercace', url: Versace },
    { name: 'Zara', url: Zara },
    { name: 'Gucci', url: Gucci },
    { name: 'Prada', url: Prada },
    { name: 'Calvin', url: Calvin },
  ];

  return (
    <section className="brands">
      <div className="container">
        <div className="brands_content">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-logo">
              <img src={brand.url} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
