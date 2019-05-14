import React, { Component } from "react";

export class Laps extends Component {
  compare(a, b) {
    return a - b; // smallest to largest
  }

  render() {
    return (
      <div className="laps">
        {this.props.laps.sort(this.compare).map(lap => (
          <div className="lap">{this.props.formatTime(lap)}</div>
        ))}
      </div>
    );
  }
}

export default Laps;
