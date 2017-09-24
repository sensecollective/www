import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Resources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
    };
  }

  componentDidMount() {
    fetch('resources.md')
      .then(response => response.text())
      .then(markdown => this.setState({ markdown }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Resources">
        <ReactMarkdown source={this.state.markdown} />
      </div>
    );
  }
}
