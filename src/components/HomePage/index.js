import React, { Component } from 'react';
import './styles.css';

import YearButton from '../YearButton';
import Timeline from '../Timeline';

class HomePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
     isTimeline: false,
    };
    this.showTimeline = this.showTimeline.bind(this);
  }

  showTimeline () {
    this.setState({
      isTimeline: !this.state.isTimeline
    })
  }

  render() {
    const {isTimeline} = this.state

    return (
      <div className="App">
        <YearButton
          label='2012'
          onClick={this.showTimeline}
        />
        <div className={isTimeline ? 'showTimeline' : 'hideTimeline'}>
          <Timeline />
        </div>
      </div>
    );
  }
}

export default HomePage;
