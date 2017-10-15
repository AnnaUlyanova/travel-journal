import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

class Header extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to='/'><p>Header</p></Link>
        <Link to='/about'><p>About</p></Link>
      </div>
    );
  }
}

export default Header;