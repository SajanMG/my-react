import React, { Component } from "react";

class Newcomp extends Component {
  styles = {
    fontSize: "bold",
    color: "teal",
  };

  state = {
    message: "Welcome sajan",
    sub: "subscribe",
  };

  messageChange = () => {
    this.setState({
      message: "Welcome sajan thanks for subscribing",
      sub: "subscribed",
    });
  };
  render() {
    return (
      <div>
        <h1 style={this.styles}>{this.state.message}</h1>
        <button onClick={this.messageChange}>{this.state.sub}</button>
      </div>
    );
  }
}

export default Newcomp;
