import React, { Component } from "react";

class Time extends Component {
  render() {
    return (
      <div className="time-view">
        <div className="time">{this.props.time}</div>
      </div>
    );
  }
}

export default Time;
