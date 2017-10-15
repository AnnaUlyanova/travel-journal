import React, { Component } from 'react';
import './styles.css';

import YearButton from '../YearButton';
import Timeline from '../Timeline';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <YearButton
          label='2012'
        />
        <Timeline />
      </div>
    );
  }
}

export default HomePage;
