import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  componentDidMount() {
    fetch(`${this.props.match.path.slice(1)}.md`)
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
