import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainPage from '../pages/MainPage';

import './App.scss';
import ProductDetailsPage from '../pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
