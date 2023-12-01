import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HandleRedirect from './components/HandleRedirect';
import Home from './pages/Home';
import Links from './pages/Links';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/:shortId" element={<HandleRedirect />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
