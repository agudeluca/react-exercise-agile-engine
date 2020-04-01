import { title } from 'constants/app';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import FileZone from 'views/file-zone';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header>
            <span>{title}</span>
          </header>
          <main>
            <FileZone />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
