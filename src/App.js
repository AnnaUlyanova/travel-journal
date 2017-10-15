import React, { Component } from 'react';
import './App.css';

import YearButton from './components/YearButton';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    return (
      <div className="App">
        <YearButton
        label='2012'
        />
      </div>
    );
  }
}

export default App;
