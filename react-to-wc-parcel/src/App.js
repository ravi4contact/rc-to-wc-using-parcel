import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from "react-to-webcomponent";
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

customElements.define("my-head", reactToWebComponent(Greeting, React, ReactDOM) );