import React, { Component } from 'react';


// const buttonStyles = {
//   border: '1px solid #eee',
//   borderRadius: 3,
//   backgroundColor: '#FFFFFF',
//   cursor: 'pointer',
//   fontSize: 15,
//   padding: '3px 10px',
// };

class Button extends Component {
  render() {
    return (
    <button
    /* style={buttonStyles} */
    onClick={this.props.handleClick}>This is a button</button>
    );
  }
}

export default Button;