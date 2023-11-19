import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header/Header';
import Promo from '../components/promo/Promo';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Promo />
      </Router>
    </div>
  );
}

export default App;
