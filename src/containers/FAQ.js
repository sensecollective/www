import React, { Component } from "react";
import ReactMarkdown from "react-markdown";


export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  componentDidMount() {
    fetch('faq.md')
      .then(response => response.text())
      .then(markdown => this.setState({ markdown }))
      .catch(error => console.log(error));
	}

  render() {
    return (
      <div className="FAQ">
				<ReactMarkdown source={this.state.markdown} />
      </div>
    );
  }
}
