import './App.css';
import React, { useState } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className='main'>
          <div className='side-bar'>
          //filter
          //subredditslist
          </div>
          
        </div>
      </div>
    </Provider>
  );
}

export default App;
