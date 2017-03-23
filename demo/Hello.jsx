import React, { PropTypes } from 'react';

class Hello extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <h1>Hello world!</h1>
    );
  }
}

Hello.propTypes = {
};

export default Hello;
