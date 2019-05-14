import React, { Component } from "react";
import "./App.css";

import Time from "./components /Time";
import Actions from "./components /Actions";
import Laps from "./components /Laps";

class App extends Component {
  constructor() {
    super();

    this.state = {
      time: 0,
      formattedTime: "00:00:00",
      timerState: "stopped",
      laps: [],
      lap: 0
    };

    // this.startTimer = this.startTime.bind(this);
  }

  startTime = () => {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        formattedTime: this.formatTime(this.state.time + 1),
        timerState: "running"
      });
    }, 1000);

    console.log("Timer has started");
  };

  pauseTime = () => {
    clearInterval(this.timer);
    this.setState({
      timerState: "paused"
    });

    console.log("Timer has paused.");
  };

  stopTime = () => {
    clearInterval(this.timer);
    this.setState({
      time: 0,
      formattedTime: "00:00:00",
      timerState: "stopped"
    });

    console.log("Timer has stopped");
  };

  lapTime = () => {
    let laps = this.state.laps;
    laps.push(this.state.time);
    this.setState({
      lap: this.state.time,
      laps: laps
    });
    console.log("Lapped Time", this.state.lap);
  };

  formatTime = seconds => {
    let date = new Date(null);
    date.setSeconds(seconds);
    let formatterTime = date.toISOString().substr(11, 8);
    return formatterTime;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>
            Timer<span>app</span>
          </h3>
        </header>

        <Time time={this.state.formattedTime} />
        <Actions
          timerState={this.state.timerState}
          startTimer={this.startTime}
          pauseTimer={this.pauseTime}
          stopTimer={this.stopTime}
          lap={this.lapTime}
        />
        <Laps laps={this.state.laps} formatTime={this.formatTime} />
      </div>
    );
  }
}

export default App;
