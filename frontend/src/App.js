import React, { Component } from 'react';
import logo from './assets/images/logo-birdie.svg';
import classes from './App.css';
import { Provider } from 'react-redux';

import Details from './components/Details';
import DetailsForm from './components/DetailsForm';

import store from './store/store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className={classes.App}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <DetailsForm />
          <hr />
          <Details />
        </div>
      </Provider>
    );
  }
}

export default App;
