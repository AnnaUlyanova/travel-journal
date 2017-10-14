import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

class YearButton extends Component {
  constructor (props) {
    super(props);

    this.openYear = this.openYear.bind(this);
  }

  openYear() {
    alert('Yay');
  }

  render() {
    const {label} = this.props;
    return (
      <MuiThemeProvider>
        <Link to='/timeline'>
          <RaisedButton
            label={label}
          />
        </Link>
      </MuiThemeProvider>
    );
  }
}

export default YearButton;