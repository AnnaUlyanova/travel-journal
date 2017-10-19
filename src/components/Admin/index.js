import React, { Component } from 'react';
import './styles.css';
import firebase from '../../firebase';

class Admin extends Component {
  constructor (props) {
    super(props);
    this.state = {
      place: '',
      year: '',
      dates: '',
      description: '',
      photo_link: '',
      map_link: '',
      notes_link: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('trips');
    const trip = {
      place: this.state.place,
      year: this.state.year,
      dates: this.state.dates,
      description: this.state.description,
      photo_link: this.state.photo_link,
      map_link: this.state.map_link,
      notes_link: this.state.notes_link,
    }
    itemsRef.push(trip);
    this.setState({
      place: '',
      year: '',
      dates: '',
      photo_link: '',
      map_link: '',
      notes_link: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Timeline</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="place" placeholder="place" onChange={this.handleChange} value={this.state.place} />
          <input type="text" name="year" placeholder="year" onChange={this.handleChange} value={this.state.year} />
          <input type="text" name="dates" placeholder="dates" onChange={this.handleChange} value={this.state.dates} />
          <input type="text" name="description" placeholder="description" onChange={this.handleChange} value={this.state.description} />
          <input type="text" name="photo_link" placeholder="photo_link" onChange={this.handleChange} value={this.state.photo_link} />
          <input type="text" name="map_link" placeholder="map_link" onChange={this.handleChange} value={this.state.map_link} />
          <input type="text" name="notes_link" placeholder="notes_link" onChange={this.handleChange} value={this.state.notes_link} />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default Admin;