import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainPage from '../pages/MainPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* new features */}
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
