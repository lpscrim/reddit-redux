import './App.css';
import { React } from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';
import { Filter } from './components/Filter/Filter';
import { Posts } from './components/Posts/Posts';


function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className='main'>
          <div className='side-bar'>
            <Filter />
          //subredditslist
          </div>
          <Posts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
