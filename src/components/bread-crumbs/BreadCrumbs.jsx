import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import './BreadCrumbs.scss';
import BreadcrumbArrowSVG from '../../assets/images/arrows/breadcrumbs_arrow.svg';

const { pathname } = window.location;
const pathNames = pathname.split('/').filter((x) => x);

function BreadCrumbs({ currentPage }) {
  // const location = useLocation();
  // const pathNames = location.pathname.split('/').filter((x)=> x);
  // console.log(pathNames)
  // console.log(window.location);

  return (
    <nav>
      <ul className="breadcrumbs">
        <li className="breadcrumbs-item">
          <Link to="/">Home</Link>
          <img src={BreadcrumbArrowSVG} alt="arrow" />
        </li>

        <li className="breadcrumbs-item">
          <Link to="/products">Products</Link>
          <img src={BreadcrumbArrowSVG} alt="arrow" />
        </li>
        <li className="breadcrumbs-item">{currentPage}</li>
      </ul>
    </nav>
  );
}

BreadCrumbs.propTypes = {
  currentPage: string,
};

BreadCrumbs.defaultProps = {
  currentPage: pathNames[pathNames.length - 1],
};
export default BreadCrumbs;
