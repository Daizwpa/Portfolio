import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact>
          <Home/>
        </Route>

      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
