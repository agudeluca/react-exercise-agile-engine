import React, { Component } from 'react';
import './App.css';
import FileZone from 'views/file-zone';
import { title } from 'constants/app';
import { Provider } from 'react-redux';
import store from 'store';
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
