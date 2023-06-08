import React, { Component } from "react";
import bell from "./bell.png";
import bell2 from "./bell2.png";

class Newcomp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Subscribe to simplilearn",
      sub: "subscribe",
      url: bell,
    };
  }

  styles = {
    fontStyle: "italic",
    color: "purple",
  };

  Buttonchange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "subscribed",
    });
  };

  Bellchange = () => {
    this.setState({
      message: "Thank you for subscribing to simplilearn. Happy learning",
      url: bell2,
    });
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p />
        <img
          onClick={this.Bellchange}
          style={{ width: "30px", height: "30px" }}
          src={this.state.url}
          alt=""
        />
      </div>
    );
  }
}

export default Newcomp;
