import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  componentDidMount() {
    fetch('contact.md')
      .then(response => response.text())
      .then(markdown => this.setState({ markdown }))
      .catch(error => console.log(error));
	}

  render() {
    return (
      <div className="Contact">
				<ReactMarkdown source={this.state.markdown} />
      </div>
    );
  }
}
