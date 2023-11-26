import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainPage from '../pages/MainPage';
import CategoryPage from '../pages/CategoryPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
