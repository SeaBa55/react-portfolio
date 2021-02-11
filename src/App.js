import React from "react";
import { Router,Route, Switch } from "react-router-dom";
// import UserAuth from "./components/UserAuth/index";
// import PrivateRoute from "./components/PrivateRoute/index";
// import PreventReverse from "./components/PreventReverse/index";
import history from "./utils/history";
import Portfolio from "./pages/Rules/index"
import About from "./pages/Login/index";
import Contact from "./pages/SignUp/index";
// import Game from "./pages/Game/index";
// import SoundSuite from "./components/SoundSuite/index"

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