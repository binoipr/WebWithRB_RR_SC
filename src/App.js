import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { NoMatch } from "./components/NoMatch";
import { Container } from "react-bootstrap";
import { Layout } from "./Layouts/Layout";
import { Navigationbar } from "./Layouts/Navbar";
import { Jumbotron } from "./Layouts/Jumbotron";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navigationbar />
        <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
};

export default App;
