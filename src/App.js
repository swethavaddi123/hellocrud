import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './Tree';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-4 left-panel">
            <Tree/>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    );
  }
}

export default App;
