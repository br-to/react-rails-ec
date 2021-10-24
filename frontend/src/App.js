import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Restaurants from './pages/Restaurants';
import Foods from './pages/Foods';
import Orders from './pages/Orders';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/restaurants" component={Restaurants}></Route>
        <Route exact path="/foods" component={Foods}></Route>
        <Route exact path="/orders" component={Orders}></Route>

        <Route exact path="/restaurants/:restaurantsId/foods"
          render={({ match }) =>
          <Foods
            match={match}
          />
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
