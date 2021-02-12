import React from "react";
import { Router,Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Portfolio from "./pages/portfolio/index"
import About from "./pages/about/index";
import Contact from "./pages/contact/index";

function App() {
  return (
    <div className="container h-100 d-flex justify-content-center">
      <div className="jumbotron my-auto">

        <Router history={history}>
          <Switch>
            
            <Route path="/" exact>
              <Portfolio />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

          </Switch>
        </Router>
      
      </div>
    </div>
  );
}

export default App;