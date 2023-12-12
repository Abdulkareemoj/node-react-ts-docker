import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HandleRedirect from './components/HandleRedirect';
import Home from './pages/Home';
import Links from './pages/Links';
import Landing from './pages/Landing';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={
            <Layout>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/links" element={<Links />} />
                <Route path="/:shortId" element={<HandleRedirect />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
