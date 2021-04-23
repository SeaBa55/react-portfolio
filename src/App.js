import React from "react";
import { Route, Switch } from "react-router-dom";
// import history from "./utils/history";
import Portfolio from "./pages/portfolio/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    // <Router basename={process.env.PUBLIC_URL} history={history}>
      <div className="App">
        <NavBar/>
        <div className="page-content">
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
        </div>
        <Footer/>
      </div>
    // </Router>
  );
}

export default App;