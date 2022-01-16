import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().toLocaleTimeString() };
  }
  handleChange() {
    this.setState({ date: new Date().toLocaleTimeString() });
  }
  componentDidMount() {
    setInterval(() => {
      this.handleChange();
    }, 1000);
  }
  componentWillUnmount() {
    console.log(this.state.date);
    clearInterval();
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <button onClick={this.handleChange.bind(this)} className="btn">
              {this.state.date}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
