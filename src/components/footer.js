import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitter: "https://twitter.com/MrMukeshX",
      linkedin: "https://www.linkedin.com/in/ofmukesh/",
      github: "https://github.com/ofmukesh",
    };
  }
  render() {
    return (
      <div className="footer">
        <a href={this.state.twitter} className="fa fa-twitter"></a>

        <a href={this.state.linkedin} className="fa fa-linkedin"></a>

        <a href={this.state.github} className="fa fa-github"></a>
      </div>
    );
  }
}
