import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HandleRedirect from './components/HandleRedirect';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/:shortId">
          <HandleRedirect />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
