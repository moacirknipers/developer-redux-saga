import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import Buscar from './buscar';

class App extends Component {
  render() {
    return ( 
      <Provider store={store}>
        <Buscar />  
       </Provider>
    )
  }
}

export default App;
