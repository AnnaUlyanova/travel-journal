import React, { Component } from 'react';
import './App.css';

import YearButton from './components/YearButton';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <YearButton
        label='2012'
        />
        <Footer />
      </div>
    );
  }
}

export default App;
