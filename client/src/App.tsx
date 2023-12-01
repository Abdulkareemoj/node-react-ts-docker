import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HandleRedirect from './components/HandleRedirect';
import Home from './pages/Home';
import Links from './pages/Links';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/:shortId" element={<HandleRedirect />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
