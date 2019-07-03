import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './container/Home/home';
import LinkDetails from './container/LinkDetails/linkDetails'

class App extends Component{
  render() {
    return (
      <Router>
        <div>
          <Route exact path={"/"} component={Home} />
          <Route path={"/link-details"} component={LinkDetails} />
        </div>
      </Router>
    )
  }

}

export default App;
