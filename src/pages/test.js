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
        <h6 className="text-light bg-danger">{this.state.date}</h6>
      </div>
    );
  }
}
