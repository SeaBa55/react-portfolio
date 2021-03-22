import React from "react";
import { Router,Route, Switch } from "react-router-dom";
import history from "./utils/history";
// import Background from "./components/background";
import Portfolio from "./pages/portfolio/index";
import About from "./pages/about/index";
import Contact from "./pages/contact/index";
import './App.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab, fas, far } from '@fortawesome/free-brands-svg-icons'
// import { faFilePdf, faGitHub, faLinkedin, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faGitHub, faLinkedin);
// library.add(fas, faFilePdf);
// library.add(far, faEnvelope);

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="page-content">
        {/* <div className="content-wrap"> */}
          <Router history={history}>
            <Switch>
            {/* <div className="container d-flex justify-content-center">
              <div className="jumbotron my-auto"> */}
                      <Route path="/" exact>
                        <Portfolio />
                      </Route>

                      <Route path="/about">
                        <About />
                      </Route>

                      <Route path="/contact">
                        <Contact />
                      </Route>
                {/* </div>
            </div> */}
            </Switch>
          </Router>
        </div>
        <Footer/>
      {/* </div> */}
    </div>
  );
}

export default App;