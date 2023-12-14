import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HandleRedirect from './components/HandleRedirect';
import Home from './pages/Home';
import Links from './pages/Links';
import Landing from './pages/Landing';
import DashboardLayout from './components/DashboardLayout';
import LandingLayout from './components/LandingLayout';

import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LandingLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/*" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="/links" element={<Links />} />
          <Route path="/:shortId" element={<HandleRedirect />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
