import React, { Component } from 'react';
import Header from '../components/Header';
import {Route} from 'react-router-dom'
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={HomePage}/>
      </div>
    );
  }
}

export default App;
