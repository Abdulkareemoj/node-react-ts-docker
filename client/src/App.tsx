import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HandleRedirect from './components/HandleRedirect';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/:shortId">
          <HandleRedirect />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
