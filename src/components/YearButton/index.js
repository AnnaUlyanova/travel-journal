import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';

class YearButton extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const {label, onClick} = this.props;
    return (
      <MuiThemeProvider>
          <RaisedButton
            label={label}
            onClick={onClick}
          />
      </MuiThemeProvider>
    );
  }
}

export default YearButton;