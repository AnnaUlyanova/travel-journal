import React, { Component } from 'react';
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
        <RaisedButton
        label={label}
        onClick={this.openYear}
        />
      </MuiThemeProvider>
    );
  }
}

export default YearButton;