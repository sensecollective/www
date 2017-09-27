import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      markdown: '',
    };
  }

  componentDidMount() {
    fetch(props.name)
      .then(response => response.text())
      .then(markdown => this.setState({ markdown }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="Contact">
        <ReactMarkdown source={props.markdown} />
      </div>
    );
  }
}
