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

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/casual" element={<CasualPage />} />
          <Route path="/party" element={<PartyPage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="/formal" element={<FormalPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
