import './App.css';
import React, { useState } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
      </div>
    </Provider>
  );
}

export default App;
