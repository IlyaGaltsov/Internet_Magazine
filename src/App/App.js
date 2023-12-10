import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainPage from '../pages/MainPage';
import CategoryPage from '../pages/CategoryPage';

import './App.scss';

import CasualPage from '../pages/CasualPage';
import PartyPage from '../pages/PartyPage';
import GymPage from '../pages/GymPage';
import FormalPage from '../pages/FormalPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import ProductsPage from '../pages/ProductsPage';
import BrandsPage from '../pages/BrandsPages';
import ScrollToTop from '../helpers/scrollToTop/scrolToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/casual" element={<CasualPage />} />
          <Route path="/party" element={<PartyPage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/formal" element={<FormalPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/brands" element={<BrandsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
