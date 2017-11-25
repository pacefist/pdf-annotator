import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './home/home';
import ContentDetail from './content-detail/contentDetail';
import logo from './logo.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a href="">
                <img alt="Brand" src={logo} />
              </a>
            </div>
          </div>
        </nav>
        <div className="container main-container">
          <div className="row">
            <Router>
              <div className="col-md-12">
                <Route exact path="/" component={Home} />
                <Route path="/detail/:id" component={ContentDetail}/>
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
