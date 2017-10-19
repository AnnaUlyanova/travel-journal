import React, { Component } from 'react';
import './styles.css';

class Footer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isUp: false
    }
    this.penguinUp = this.penguinUp.bind(this);
  }

  penguinUp() {
    this.setState({
      isUp: !this.state.isUp
    })
  }

  render() {
    const {isUp} = this.state
    return (
      <div className='container'>
        <div className='footerParagraph'><p>Footer</p></div>
        <div className={isUp ? 'penguinUp' : 'penguinDown'} onClick={this.penguinUp}> <img src='/images/penguin.png' alt='penguin'/></div>
      </div>
    );
  }
}

export default Footer;