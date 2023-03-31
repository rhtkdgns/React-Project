/* eslint-disable */
import MNavbar from './common/MNavbar';
import routes from './routes';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {

  
  return (
    <Router>
      <div className="App">
      <MNavbar/>
        <div className="container">
          <Switch>
            { routes.map((route,i) => {
              return(
                <Route exact path={route.path} key={i}>
                  <route.component/>
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;