import React from 'react';

export default class App extends React.Component {
	state = ({
		astroList: []
	})
	componentDidMount() {
		fetch("http://api.open-notify.org/astros.json")
		.then(r => r.json())
		.then(rj => this.setState({astroList: rj}))
	}
	render() {
		return (
			<div></div>
		)
	}
}