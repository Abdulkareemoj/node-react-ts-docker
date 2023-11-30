import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HandleRedirect from './components/HandleRedirect';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shortId" element={<HandleRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
