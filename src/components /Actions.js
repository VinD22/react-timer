import React, { Component } from "react";

export class Actions extends Component {
  render() {
    let start =
      this.props.timerState !== "running" ? (
        <button className="start" onClick={this.props.startTimer}>
          Start
        </button>
      ) : (
        <button className="start" disabled>
          Start
        </button>
      );

    let lap =
      this.props.timerState === "running" ? (
        <button className="lap" onClick={this.props.lap}>
          Lap
        </button>
      ) : (
        <button className="lap" disabled>
          Lap
        </button>
      );

    let pause =
      this.props.timerState === "running" ? (
        <button className="pause" onClick={this.props.pauseTimer}>
          Pause
        </button>
      ) : (
        <button className="pause" disabled>
          Pause
        </button>
      );

    let stop =
      this.props.timerState !== "stopped" ? (
        <button className="stop" onClick={this.props.stopTimer}>
          Stop
        </button>
      ) : (
        <button className="stop" disabled>
          Stop
        </button>
      );

    return (
      <div>
        {start}
        {lap}
        {pause}
        {stop}
      </div>
    );
  }
}

export default Actions;
