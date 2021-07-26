import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Contect from './pages/contact';
import Project from './pages/projects';
function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/contact">
          <Contect />
        </Route>

        <Route path="/project">
          <Project />
        </Route>


      </Switch>
    </BrowserRouter>
  );
}

export default App;
