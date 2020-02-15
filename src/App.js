// create your App component here
import React, { Component } from "react";

export default class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(json => {
        let people = json.people.map(p => p.name);
        this.setState({ data: people });
      });
  }
  render() {
    return (
      <p>
        {this.state.data.map(p => (
          <p>{p}</p>
        ))}
      </p>
    );
  }
}
