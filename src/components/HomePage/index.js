import React, { Component } from 'react';
import './styles.css';

import Years from '../Years';
import Timeline from '../Timeline';

class HomePage extends Component {
  constructor (props) {
    super(props);
    this.state = {
     isTimeline: true,
    };
    // this.showTimeline = this.showTimeline.bind(this);
  }

  // showTimeline () {
  //   this.setState({
  //     isTimeline: !this.state.isTimeline
  //   })
  // }

  render() {
    const {isTimeline} = this.state

    return (
      <div className="App">
        <Years />
        <div className={isTimeline ? 'showTimeline' : 'hideTimeline'}>
          <Timeline />
        </div>
      </div>
    );
  }
}

export default HomePage;
