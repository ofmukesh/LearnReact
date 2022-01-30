import React, { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_src:
        "https://www.freepnglogos.com/uploads/hacker-png/cyberghost-vpn-review-dom-hacker-22.png",
    };
  }
  render() {
    return (
      <div className="fixed-top d-flex text-light p-2">
        <img src={this.state.img_src} className="logo" />
        <div className="ms-auto">
          <div className="row">
            <div className="col">Home</div>
            <div className="col">Skills</div>
            <div className="col">Education</div>
          </div>
        </div>
      </div>
    );
  }
}
