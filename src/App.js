import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Home from './components/Home';
import Artista from './components/Artista';

function RouterApp() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/artista">Artista</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artista" element={<Artista />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
