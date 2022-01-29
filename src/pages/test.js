import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval();
  }
  render() {
    return (
      <div>
        <h1>{this.state.date}</h1>
      </div>
    );
  }
}
