import React, { Component } from 'react';
import YearButton from './YearButton'
import './styles.css';
import firebase from '../../firebase';

class Years extends Component {

  constructor (props) {
    super(props);
    // this.state = {
    //   isTimeline: true,
    // };
    this.showTimeline = this.showTimeline.bind(this);
    this.state = {
      trips: []
    }
  }

  showTimeline () {
    // this.setState({
    //   isTimeline: !this.state.isTimeline
    // })
    alert('clicked')
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('trips');
    itemsRef.on('value', (snapshot) => {
      let trips = snapshot.val();
      let newState = [];
      for (let trip in trips) {
        newState.push({
          id: trip,
          year: trips[trip].year,
        });
      }
      this.setState({
        trips: newState
      });
    });
  }


  render() {
    return (
      <div>
        <h1>Years</h1>
        <p>Years List</p>
        <ul>
          {this.state.trips.map((trip) => {
            return (
              <YearButton
                key={trip.id}
                label={trip.year}
                onClick={this.showTimeline}
              />
            )
          })}
        </ul>
       </div>
    );
  }
}

export default Years;