import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./About.css";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  componentDidMount() {
    fetch('about.md')
      .then(response => response.text())
      .then(markdown => this.setState({ markdown }))
      .catch(error => console.log(error));
	}

  render() {
    return (
      <div className="About">
				<ReactMarkdown source={this.state.markdown} />
      </div>
    );
  }
}
